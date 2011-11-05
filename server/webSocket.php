<?php

/*
 */

class WebSocket extends Socket
{
    protected $arr_socket = array();
    
    protected $arr_client = array();
    
    public function __construct( $socket_host, $socket_port )
    {
        parent::__construct( $socket_host, $socket_port );
        
        //put master socket into the first position of array
        $this->socket[] = $this->master_socket;
    }
    
    public function receive()
    {
        set_time_limit( 0 );
        
        while( true )
        {
            $this->console( "Number of Socket: " . count( $this->arr_socket) );
            $this->console( "Number of Client: " . count( $this->arr_client) );
            
            //copy an array
            $changed_socket = $this->arr_socket;
            
            //use $changed_socket to get a array containing changed socket
            $num_socket = socket_select( $changed_socket, $write=NULL, $exception=NULL, NULL );
            
            //only work when there is some socket changed
            if( $num_socket === false )
            {
                die( "socket_select fail: " . socket_strerror(socket_last_error()) );
            }
            else
            {
                if( $num_socket > 0 )
                {
                    foreach( $changed_socket as $socket )
                    {
                        //if master socket changed, it means some new client is connecting
                        if( $socket === $this->master_socket )
                        {
                            //see if accept avaliable
                            $new_socket = socket_accept( $this->master_socket );
                            
                            if( $new_socket === true )
                            {
                                $this->arr_socket[] = $new_socket;
                                $this->arr_client[] = new Client( $new_socket );
                                $this->console( "new socket {$new_socket} connected" );
                            }
                            else
                            {
                                die( "socket_accept() failed." );
                            }
                        }
                        else
                        {
                            //read any data received from socket
                            $num_bytes = @socket_recv( $socket, $buff, 512, 0 );
                            
                            //if no data received, it means this socket is disconnected
                            if( num_bytes === 0 || num_bytes > 512 )
                            {
                                return false;
                            }
                            else
                            {
                                
                            }
                            //if too much data received, server disconnects the socket for safe
                            //return data received
                        }
                    }
                }
            }
        }
    }
    
    public function console( $msg, $type="WebSocket")
    {
        parent::console( $msg, $type );
    }
}

?>
