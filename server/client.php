<?php

/*
 */

class Client
{
    public $ip;
    public $if_handshaked;
    public $socket;
    
    public function __construct( $socket )
    {
        $this->socket = $socket;
        $this->if_handshaked = false;
        socket_getpeername( $this->socket, $this->ip );
    }
}

?>
