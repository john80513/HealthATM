
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>userCountDown</title>
</head>

<body>


</body>
</html>

<?php
   
    //一次增加人數
    $fo=fopen('setting.txt','r');
    $addPer=fgets($fo);
    fclose($fo);  

    
    $fo=fopen('pCountDown.txt','r');
    $num=fgets($fo);
    fclose($fo);

    if($num<999999999){
        $num +=$addPer;
    }
    
     
    $fo=fopen('pCountDown.txt','w');
    fwrite($fo,$num);
    fclose($fo);

?>

<?php
echo phpinfo();
?>
