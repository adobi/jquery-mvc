<?php

  if ($_POST)
    echo json_encode(array('message'=>'Message sent via POST => ' . $_POST['name'] . $_POST['message']));
  
  die;