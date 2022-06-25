<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Healthatm網站設定</title>
    <meta charset="utf-8" />
    
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>

<body style="font-family:'微軟正黑體'">

<div class="container">

<div class="row jumbotron">
    <form id="formPost" method="post" action=""> 
    <h3>人數自動累加設置</h3><br/> 

    <div class="form-group">         
            <label>初始人數: </label>
            <input type="text" id="pNum" name="pNum" class="form-control" placeholder="請輸入人數" required digits min='1'/>
    </div>
    <div class="form-group">
            <label>每次累加人數: </label>
            <input type="text" id="per" name="per" class="form-control" placeholder="請輸入人數" required digits min='1'/>
    </div>

            <input type="submit" class="btn btn-primary" value="確認"/>
    
    </form>
</div>
<br/><br/>

<div class="row jumbotron">
    <form id="formPost2" method="post" action="">
    <h3>健康指數設定</h3><br/>
    <label>城市選擇: </label>
    <select name="select1" id="select" class="form-control">
    <?php  
    $citys = array(
        "臺北市",
        "基隆市",
        "新北市",
        "宜蘭縣",
        "新竹市",
        "新竹縣",
        "桃園市",
        "苗栗縣",
        "台中市",
        "彰化縣",
        "南投縣",
        "嘉義市",
        "嘉義縣",
        "雲林縣",
        "台南市",
        "高雄市", 
        "屏東縣",
        "臺東縣",
        "花蓮縣");
    
    foreach($citys as $value){
	 echo "<option value=$value>$value</option>";
	 }
    ?>
    </select>
    <br/><br/>
    <label>數值設定: </label>
    <select name="select2" id="select" class="form-control">
    <?php  for($i=100;$i<=500;$i+=100){
	 echo "<option value=$i>$i</option>";
	 }
    ?>
   </select>
   <br/>
    <input type="submit" name="healthData" class="btn btn-primary" value="確認"/>
    <br/><br/>
    </form>
</div>
    
</div>
    
    
    <script src="http://static.runoob.com/assets/jquery-validation-1.14.0/lib/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.min.js"></script>
   
    <script>

        $(function () {

            $('#formPost').validate({
        submitHandler:function(form){
            alert("人數設置成功!");   
            form.submit();
            }    
                });


             $('#formPost2').submit(function(){
                alert('健康指數設置成功!');
            })
        })
            
          
    </script>
</body>
</html>

<?php

if (isset($_POST['pNum']))
{

     //初始人數
   $peopleInitial = $_POST["pNum"];

   //一次增加人數
   $addPer = $_POST['per'];

   $fo=fopen('pCountDown.txt','w');
    fwrite($fo,$peopleInitial);
    fclose($fo);

   $fo=fopen('setting.txt','w');
    fwrite($fo,$addPer);
    fclose($fo);
   
    //紀錄更新時間
    $datetime = date ("Y.m.d"); 
    $fo=fopen('updateDate.txt','w');
    fwrite($fo,$datetime);
    fclose($fo);

} 
  

if (isset($_POST['healthData']))
{

$json_string = file_get_contents("TaiwanCity.json");// 從檔案中讀取資料到PHP變數
//echo $json_string;
$data = json_decode($json_string);

switch($_POST['select1']){
case "宜蘭縣":
writeJson($data,0,$_POST['select2']);
break;
case "新竹縣":
writeJson($data,1,$_POST['select2']);
break;
case "苗栗縣":
writeJson($data,2,$_POST['select2']);
break;
case "彰化縣":
writeJson($data,3,$_POST['select2']);
break;
case "南投縣":
writeJson($data,4,$_POST['select2']);
break;
case "雲林縣":
writeJson($data,5,$_POST['select2']);
break;
case "嘉義縣":
writeJson($data,6,$_POST['select2']);
break;
case "屏東縣":
writeJson($data,7,$_POST['select2']);
break;
case "臺東縣":
writeJson($data,8,$_POST['select2']);
break;
case "花蓮縣":
writeJson($data,9,$_POST['select2']);
break;
case "基隆市":
writeJson($data,10,$_POST['select2']);
break;
case "新竹市":
writeJson($data,11,$_POST['select2']);
break;
case "嘉義市":
writeJson($data,12,$_POST['select2']);
break;
case "臺北市":
writeJson($data,13,$_POST['select2']);
break;
case "高雄市":
writeJson($data,14,$_POST['select2']);
break;
case "新北市":
writeJson($data,15,$_POST['select2']);
break;
case "台中市":
writeJson($data,16,$_POST['select2']);
break;
case "台南市":
writeJson($data,17,$_POST['select2']);
break;
case "桃園市":
writeJson($data,18,$_POST['select2']);
break;
}
   
}

//修改json欄位值
function writeJson ($data,$x,$healthNum){ 
    $data->features[$x]->properties->population = $healthNum;
    $json_strings = json_encode($data);
    file_put_contents("TaiwanCity.json",$json_strings);
}
?>
