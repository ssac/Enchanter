<?php

/*
 */

class Socket
{
    protected $master_socket;
    
    public function __construct( $socket_host, $socket_port )
    {
        $this->master_socket = socket_create( AF_INET, SOCK_STREAM, SOL_TCP );
        
        if( $this->master_socket != NULL )
        {
            $this->console("Socket {$this->master_socket} created");
            
            // tell sys that allow resuing the port
            socket_set_option( $this->master_socket, SOL_SOCKET, SO_REUSEADDR, 1 );
            
            // assign socket to particular ip and port number
            $bind_result = socket_bind( $this->master_socket, $socket_host, $socket_port );
            
            if( $bind_result === true )
            {
                $this->console( "socket bound to {$socket_host}:{$socket_port}" );
                
                $listen_result = socket_listen( $this->master_socket, 5 );
                
                if( $listen_result == true )
                {
                    $this->console("socket listen succeed");
                }
                else
                {
                    die("socket listen failed");
                }
            }
        }
        else
        {
            die("socket create failed");
        }
    }
    
    protected function console( $msg, $type="SOCKET" )
    {
        $msg = explode( "\n", $msg );
        
        foreach( $msg as $line )
        {
            echo( date('Y-m-d H:i:s') . "{$type}:{$line}\n" );
        }
    }
    
    protected function send( $socket, $msg )
    {
        socket_write( $socket, $msg, strlen(msg) );
    }
}

?>
