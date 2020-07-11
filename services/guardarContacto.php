<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$servidor="localhost";
$usuario="root";
$password="";
$DB="libreria";

if($_SERVER["REQUEST_METHOD"]=="POST" && empty($POST))
 $_POST=json_decode(file_get_contents('php://input'),true);


$conexion=new mysqli($servidor,$usuario,$password,$DB);
if($conexion->connect_errno)
{
echo "erro al conectarse";
}else{
$query="INSERT into contacto(nombre,correo,comentario)values('".$_POST["nombreF"]."','".$_POST["correoF"]."','".$_POST["comentF"]."')";

$resultado=$conexion->query($query);







class resultado{};
$respuesta = new resultado();
if($resultado)
{

$respuesta->resultado="200";
$respuesta->mensaje="datos guardados";

}

//header('Content-Type:application/json');
echo json_encode($respuesta);
}


?>