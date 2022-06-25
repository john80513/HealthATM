




var map;

var markers = [];

var infowindow;

//準備定位物件
var position = [
{ name: '統佳', area: '北區', address: '台北市中山區松江路237號1樓(7-ELEVEN 統佳門市)', lat: 25.0590107, lng: 121.5313507 },
{ name: '天北', area: '北區', address: '台北市士林區天母里天母西路39-1號1樓(7-ELEVEN 天北門市)', lat: 25.1186901, lng: 121.52747019999993 },
{ name: '昌吉', area: '北區', address: '台北市大同區承德路三段60號60-1號(7-ELEVEN 昌吉門市)', lat: 25.0653265, lng: 121.5182565 },
{ name: '圓泉', area: '北區', address: '台北市大同區酒泉街25號27號1樓(7-ELEVEN 圓泉門市)', lat: 25.0707316, lng: 121.51938010000003 },
{ name: '榮鑫', area: '北區', address: '台北市中山區建國北路三段91號(7-ELEVEN 榮鑫門市)', lat: 25.0656924, lng: 121.53677229999994 },
{ name: '新錦祥', area: '北區', address: '台北市中山區錦西街16號(7-ELEVEN 新錦祥門市)', lat: 25.0602699, lng: 121.52130209999996 },
{ name: '福源', area: '北區', address: '台北市松山區新東街60巷16號18號1樓(7-ELEVEN 福源門市)', lat: 25.0581289, lng: 121.56726200000003 },
{ name: '六福', area: '北區', address: '台北市萬華區漢口街二段73號1樓(7-ELEVEN 六福門市)', lat: 25.0461339, lng: 121.50529959999994 },
{ name: '紹興', area: '北區', address: '台北市中正區紹興北街37號1樓(7-ELEVEN 紹興門市)', lat: 25.0454739, lng: 121.52554269999996 },
{ name: '松高', area: '北區', address: '台北市信義區基隆路1段141號1樓(7-ELEVEN 松高門市)', lat: 25.0429861, lng: 121.56595190000007 },
{ name: '港德', area: '北區', address: '台北市南港區福德街373巷25號(7-ELEVEN 港德門市)', lat: 25.0394018, lng: 121.59155520000002 },
{ name: '名寶', area: '北區', address: '台北市內湖區民權東路6段180巷17號19號(7-ELEVEN 名寶門市)', lat: 25.0682619, lng: 121.5928917 },
{ name: '環金', area: '北區', address: '台北市內湖區環山路二段81號83號1樓(7-ELEVEN 環金門市)', lat: 25.084751, lng: 121.57481640000003 },
{ name: '薇美', area: '北區', address: '台北市中山區敬業三路11號1樓(7-ELEVEN 薇美門市)', lat: 25.0836386, lng: 121.55594139999994 },
{ name: '指南', area: '北區', address: '台北市文山區指南路1段34號36號1樓(7-ELEVEN 指南門市)', lat: 24.9876009, lng: 121.56966399999999 },
{ name: '新安康', area: '北區', address: '台北市文山區木柵路二段88號90號1樓(7-ELEVEN 新安康門市)', lat: 24.9885859, lng: 121.55992900000001 },
{ name: '旭泰', area: '北區', address: '新北市汐止區建成路57巷1號3號(7-ELEVEN 旭泰門市)', lat: 25.0731546, lng: 121.66249419999997 },
{ name: '永和', area: '北區', address: '新北市永和區文化路7號(7-ELEVEN 永和門市)', lat: 25.0149734, lng: 121.51535149999995 },
{ name: '有民', area: '北區', address: '新北市永和區民有街9號11號1樓(7-ELEVEN 有民門市)', lat: 24.9969499, lng: 121.51633240000001 },
{ name: '景愛', area: '北區', address: '新北市中和區仁愛街45號47號1樓(7-ELEVEN 景愛門市)', lat: 24.9882834, lng: 121.51126049999993 },
{ name: '深澳坑', area: '北區', address: '基隆市信義區深澳坑路2-6號2-7號(7-ELEVEN 深澳坑門市)', lat: 25.1370229, lng: 121.77123770000003 },
{ name: '二十張', area: '北區', address: '新北市新店區二十張路5號1樓(7-ELEVEN 二十張門市)', lat: 24.9825978, lng: 121.5400234 },
{ name: '台北矽谷', area: '北區', address: '新北市新店區北新路三段205號2樓(台北矽谷科技園區)', lat: 24.984053, lng: 121.54005259999997 },
{ name: '前進', area: '北區', address: '新北市蘆洲區中正路185巷50號52號1樓(7-ELEVEN 前進門市)', lat: 25.0849017, lng: 121.46720049999999 },
{ name: '延城', area: '北區', address: '新北市土城區延和路203號1樓(7-ELEVEN 延城門市)', lat: 24.990194, lng: 121.46964409999998 },
{ name: '福峽', area: '北區', address: '新北市三峽區介壽路1段286號1樓(7-ELEVEN 福峽門市)', lat: 24.9298737, lng: 121.37994800000001 },
{ name: '榮和', area: '北區', address: '新北市新莊區中和街191巷1號3號5號(7-ELEVEN 榮和門市)', lat: 25.0511056, lng: 121.44774180000002 },
{ name: '油庫口', area: '北區', address: '新北市板橋區文化路一段188巷38號40號1樓(7-ELEVEN 油庫口門市)', lat: 25.019061, lng: 121.46669199999997 },
{ name: '遠來', area: '北區', address: '新北市林口區仁愛路2段510號1樓(7-ELEVEN 遠來門市)', lat: 25.0772676, lng: 121.37396939999996 },
{ name: '奕真', area: '北區', address: '新北市泰山區明志路二段185號1樓(7-ELEVEN 奕真門市)', lat: 25.0497725, lng: 121.42762770000002 },
{ name: '新宏盛', area: '北區', address: '新北市新莊區後港一路114號(7-ELEVEN 新宏盛門市)', lat: 25.026981, lng: 121.42862600000001 },
{ name: '觀景', area: '北區', address: '新北市八里區觀海大道53號(7-ELEVEN 觀景門市)', lat: 25.1616671, lng: 121.42812890000005 },
//{ name: '淡芝', area: '北區', address: '新北市淡水區淡金路五段120號1樓(7-ELEVEN 淡芝門市)', lat: 25.2371331, lng: 121.45660680000003 },
{ name: '鳳福', area: '北區', address: '新北市鶯歌區鶯桃路2段48號50號1樓(7-ELEVEN 鳳福門市)', lat: 24.9727852, lng: 121.32538399999999 },
{ name: '新北大', area: '北區', address: '新北市三峽區大學路156號1樓(7-ELEVEN 新北大門市)', lat: 24.9454877, lng: 121.37336430000005 },
{ name: '統壢', area: '北區', address: '桃園市中壢區定寧路15號(7-ELEVEN 統壢門市)', lat: 24.993364, lng: 121.24514199999999 },
{ name: '仁善', area: '北區', address: '桃園市大溪區埔頂路二段183號(7-ELEVEN 仁善門市)', lat: 24.9105702, lng: 121.2795069 },
{ name: '四重埔', area: '北區', address: '新竹縣竹東鎮中興路一段157號(7-ELEVEN 四重埔門市)', lat: 24.7544182, lng: 121.07178479999993 },
{ name: '易仕', area: '北區', address: '桃園市龍潭區中豐路695巷2-1號(7-ELEVEN 易仕門市)', lat: 24.8880195, lng: 121.21233000000007 },
{ name: '新貴中', area: '北區', address: '桃園市平鎮區新貴里中豐路一段98號1樓(7-ELEVEN 新貴中門市)', lat: 24.9297276, lng: 121.21370009999998 },
{ name: '新龍鄉', area: '北區', address: '桃園市龍潭區民族路170號172號1樓(7-ELEVEN 新龍鄉門市)', lat: 24.8413562, lng: 121.23565250000001 },
{ name: '馬武督', area: '北區', address: '新竹縣關西鎮中豐新路2-1號1樓(7-ELEVEN 馬武督門市)', lat: 24.7804509, lng: 121.17901800000004 },
{ name: '關西', area: '北區', address: '新竹縣關西鎮正義路286-1號(7-ELEVEN 關西門市)', lat: 24.7971776, lng: 121.17251639999995 },
{ name: '大享', area: '北區', address: '桃園市中壢區中正路1262號1樓(7-ELEVEN 大享門市)', lat: 24.9707532, lng: 121.20168639999997 },
{ name: '尊品', area: '北區', address: '桃園市桃園區建國路41之1號(7-ELEVEN 尊品門市)', lat: 24.9857299, lng: 121.31679180000003 },
{ name: '航竹', area: '北區', address: '桃園市蘆竹區大竹路408號(7-ELEVEN 航竹門市)', lat: 25.0199106, lng: 121.2657643 },
{ name: '宏亞', area: '北區', address: '桃園市桃園區中平路102號(7-ELEVEN 宏亞門市)', lat: 24.9873949, lng: 121.29276149999998 },
{ name: '長業', area: '北區', address: '桃園市中壢區長春路23號(7-ELEVEN 長業門市)', lat: 24.9789623, lng: 121.24988080000003 },
{ name: '富正', area: '北區', address: '新竹縣竹東鎮東寧路一段261號1樓(7-ELEVEN 富正門市)', lat: 24.7274776, lng: 121.09309600000006 },
{ name: '東平驛', area: '中區', address: '台中市中區台灣大道一段531號(7-ELEVEN 東平驛門市)', lat: 24.1444298, lng: 120.6768303 },
{ name: '東村', area: '中區', address: '台中市太平區東村路200號(7-ELEVEN 東村門市)', lat: 24.1374884, lng: 120.72415550000005 },
{ name: '甲渭', area: '中區', address: '台中市大甲區龍泉里8鄰中山路二段905之8號(7-ELEVEN 甲渭門市)', lat: 24.4019218, lng: 120.64124270000002 },
{ name: '高美祿', area: '中區', address: '台中市清水區高美路190號1樓(7-ELEVEN 高美祿門市)', lat: 24.2824051, lng: 120.57503829999996 },
{ name: '星河', area: '中區', address: '台中市沙鹿區鹿峰里中山路646號(7-ELEVEN 星河門市)', lat: 24.2556651, lng: 120.56929200000002 },
{ name: '真樂', area: '中區', address: '苗栗縣苗栗市玉清路329號1樓(7-ELEVEN 真樂門市)', lat: 24.5627386, lng: 120.83527470000001 },
{ name: '通館', area: '中區', address: '苗栗縣通霄鎮通西里中山路10號(7-ELEVEN 通館門市)', lat: 24.4868457, lng: 120.67854069999999 },
{ name: '海天', area: '中區', address: '新竹市香山區海埔路136號(7-ELEVEN 海天門市)', lat: 24.8188611, lng: 120.924936 },
{ name: '關圓', area: '中區', address: '新竹市東區關東路56號1樓(7-ELEVEN 關圓門市)', lat: 24.783302, lng: 121.023008 },
{ name: '甜心', area: '中區', address: '台中市豐原區圓環東路168號(7-ELEVEN 甜心門市)', lat: 24.243277, lng: 120.71899669999993 },
{ name: '泰鑫', area: '中區', address: '新竹縣竹北市新泰路31號一樓(7-ELEVEN 泰鑫門市)', lat: 24.840499, lng: 121.00841700000001 },
{ name: '香江', area: '中區', address: '新竹市香山區中華路6段428-430號(7-ELEVEN 香江門市)', lat: 24.7350592, lng: 120.9126192 },
{ name: '台麗', area: '中區', address: '台中市西區五權路119號(7-ELEVEN 台麗門市)', lat: 24.1470247, lng: 120.6725748 },
{ name: '美群', area: '中區', address: '台中市大里區美群路60號(7-ELEVEN 美群門市)', lat: 24.085405, lng: 120.70822999999996 },
{ name: '蔗園', area: '中區', address: '台中市大肚區遊園路1段143號(7-ELEVEN 蔗園門市)', lat: 24.1672061, lng: 120.57809799999995 },
{ name: '豐億', area: '中區', address: '南投縣南投市彰南路一段573號(7-ELEVEN 豐億門市)', lat: 23.8953197, lng: 120.68745009999998 },
{ name: '好修', area: '中區', address: '彰化縣埔鹽鄉員鹿路二段95號(7-ELEVEN 好修門市)', lat: 24.0034429, lng: 120.46133850000001 },
{ name: '向日葵', area: '中區', address: '南投縣草屯鎮芬草路三段219之1號(7-ELEVEN 向日葵門市)', lat: 24.000662, lng: 120.65767619999997 },
{ name: '瑞峰', area: '中區', address: '南投縣水里鄉北埔村中山路一段540號(7-ELEVEN 瑞峰門市)', lat: 23.8116045, lng: 120.85069329999999 },
{ name: '保庄', area: '中區', address: '雲林縣斗六市明德北路三段285號(7-ELEVEN 保庄門市)', lat: 23.708963, lng: 120.53032129999997 },
{ name: '虎大', area: '中區', address: '雲林縣虎尾鎮工專路156號(7-ELEVEN 虎大門市)', lat: 23.703127, lng: 120.42510199999992 },
{ name: '宇宸', area: '中區', address: '雲林縣虎尾鎮清雲路770號(7-ELEVEN 宇宸門市)', lat: 23.7395183, lng: 120.4256901 },
{ name: '大員山', area: '中區', address: '彰化縣員林市中山路一段300號(7-ELEVEN 大員山門市)', lat: 23.9490248, lng: 120.56518319999998 },
{ name: '新大埔', area: '中區', address: '彰化縣彰化市延平里大埔路540號542號(7-ELEVEN 新大埔門市)', lat: 24.06522, lng: 120.542822 },
{ name: '福環', area: '中區', address: '彰化縣福興鄉同安村員鹿路一段439號(7-ELEVEN 福環門市)', lat: 24.0323259, lng: 120.44068100000004 },
{ name: '雅新', area: '中區', address: '新竹市北區湳雅街154號(7-ELEVEN 雅新門市)', lat: 24.8206472, lng: 120.97409210000001 },
{ name: '鑫程', area: '南區', address: '高雄市岡山區大德二路61號(7-ELEVEN 鑫程門市)', lat: 22.7913035, lng: 120.30638840000006 },
{ name: '千湖', area: '南區', address: '高雄市湖內區葉厝里保生路135號137號(7-ELEVEN 千湖門市)', lat: 22.907169, lng: 120.22065399999997 },
{ name: '新墘', area: '南區', address: '台南市新市區港墘里民族路118號(7-ELEVEN 新墘門市)', lat: 23.0823211, lng: 120.29954229999998 },
{ name: '康平', area: '南區', address: '台南市安平區健康三街81號(7-ELEVEN 康平門市)', lat: 22.9869601, lng: 120.16818060000003 },
{ name: '保祥', area: '南區', address: '嘉義縣太保市祥和三路東段226號(7-ELEVEN 保祥門市)', lat: 23.4543244, lng: 120.29448389999993 },
{ name: '朴站', area: '南區', address: '嘉義縣朴子市平和里光復路29號1樓(7-ELEVEN 朴站門市)', lat: 23.4643226, lng: 120.2467398 },
{ name: '雙永', area: '南區', address: '台南市永康區永大一路60號1樓(7-ELEVEN 雙永門市)', lat: 23.0179659, lng: 120.26059669999995 },
{ name: '豐平', area: '南區', address: '台南市安平區平豐路430號1樓(7-ELEVEN 豐平門市)', lat: 22.9942409, lng: 120.16387529999997 },
{ name: '將軍', area: '南區', address: '台南市將軍區長榮里長榮29之2號(7-ELEVEN 將軍門市)', lat: 23.197043, lng: 120.15835300000003 },
{ name: '新瑞鴻', area: '南區', address: '嘉義市西區文化里民族路456號458號1樓(7-ELEVEN 新瑞鴻門市)', lat: 23.4760106, lng: 120.44999439999992 },
{ name: '資砡', area: '南區', address: '嘉義市西區港坪里玉山路422號(7-ELEVEN 資砡門市)', lat: 23.4704804, lng: 120.41852210000002 },
{ name: '城中', area: '南區', address: '台南市安南區安中路六段599號601號(7-ELEVEN 城中門市)', lat: 23.0622863, lng: 120.12972809999997 },
{ name: '鑫寶華', area: '南區', address: '高雄市三民區九如一路126號(7-ELEVEN 鑫寶華門市)', lat: 22.637058, lng: 120.34082699999999 },
{ name: '新建', area: '南區', address: '高雄市鹽埕區建國四路175號(7-ELEVEN 新建門市)', lat: 22.6261023, lng: 120.28048360000003 },
{ name: '永盛', area: '南區', address: '屏東縣鹽埔鄉鹽中村勝利路81之3號(7-ELEVEN 永盛門市)', lat: 22.756474, lng: 120.57565799999998 },
{ name: '新楠梓', area: '南區', address: '高雄市楠梓區中陽里楠梓新路188號188-1號1樓(7-ELEVEN 新楠梓門市)', lat: 22.7264382, lng: 120.32497469999998 },
{ name: '牛潮埔', area: '南區', address: '高雄市鳳山區鎮北里鳳北路60之17號(7-ELEVEN 牛潮埔門市)', lat: 22.6410661, lng: 120.36725769999998 },
{ name: '新輔英', area: '南區', address: '屏東縣東港鎮興台里中山路3號(7-ELEVEN 新輔英門市)', lat: 22.4650694, lng: 120.45387600000004 },
{ name: '埔豐', area: '南區', address: '屏東縣內埔鄉豐田村中正路291號(7-ELEVEN 埔豐門市)', lat: 22.6313231, lng: 120.54393920000007 },
{ name: '新高榮', area: '南區', address: '高雄市左營區福山里榮總路175號1樓(7-ELEVEN 新高榮門市)', lat: 22.6808923, lng: 120.32164139999998 },
{ name: '裕東', area: '南區', address: '高雄市鼓山區裕誠路1946號1樓(7-ELEVEN 裕東門市)', lat: 22.6587463, lng: 120.2940198 },
{ name: '駿隆', area: '東區', address: '宜蘭縣礁溪鄉中山路一段175號(7-ELEVEN 駿隆門市)', lat: 24.8207921, lng: 121.77053599999999 },
{ name: '羅高', area: '東區', address: '宜蘭縣羅東鎮公正路357號359號(7-ELEVEN 羅高門市)', lat: 24.6806854, lng: 121.75999200000001 },
{ name: '蓮嘉', area: '東區', address: '花蓮縣新城鄉嘉里村嘉里路155號157號(7-ELEVEN 蓮嘉門市)', lat: 24.020699, lng: 121.60882360000005 },
{ name: '豐坪', area: '東區', address: '花蓮縣壽豐鄉豐坪村豐坪路二段5之1號1樓(7-ELEVEN 豐坪門市)', lat: 23.832758, lng: 121.50843499999996 },
{ name: '東捷', area: '東區', address: '台東縣台東市豐榮里豐盛路1號(7-ELEVEN 東捷門市)', lat: 22.7454274, lng: 121.14096970000003 },
{ name: '東馳', area: '東區', address: '台東縣池上鄉中東三路46號1樓(7-ELEVEN 東馳門市)', lat: 23.1227232, lng: 121.21871599999997 },

];





//產生地圖
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: {
            lat: 23.9036873,
            lng: 121.07937049999998
        },
        mapTypeControl: false
    });

    for (var i = 0; i < position.length; i++) {
        addMarker(i);
        addEvent(i);
    }


    loadLocation()

    $("#north,#central,#south,#east").on("click", "div", function () {//選單點選切換至對應圖標
        if (infowindow != undefined)
            infowindow.close();

        var loc = { lat: parseFloat($(this).attr('lat')), lng: parseFloat($(this).attr('lng')) }

        map.setCenter(loc);
        map.setZoom(15);

        openInfo($(this));

        //隱藏資訊展開

        //if ($("#informationBar").css('position') == 'absolute') {//判斷裝置->web

        //    var appendContent = "<div class='toggleContent'>1231233333333333123<div>1231233333333333123</div><div>1231233333333333123</div></div>"
        //    if ($(this).next().prop('class') != 'toggleContent' || $(this).next() == undefined)
        //        $(this).after(appendContent)

        //    $(this).next().toggle(1500);

        //}



        //手機板

        if ($("#informationBar").css('position') == 'relative') {//判斷裝置->phone
            $("#informationBar").css('display', 'none');
            $("#map").css('display', 'none');

            $("#infoForPhone").toggle(500);

            var api = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAVNDWxLDEkGat_IIiaK9QXAB8rUbkil0Y&q=';

            var address = api + $(this).find($(".card-text")).text();



            var htmlContent = "<button id='back'  class='btn btn-atm btn-sm' type='button'>回上一頁</button><h3 style='margin-bottom:20px;'>H2U健康ATM <span>" + $(this).attr('area') + "</span>服務據點</h3><h5>地址: <span>" + $(this).find($(".card-text")).text() + "</span></h5><h5>營業時間: 24小時</h5><div id ='iframe1'><iframe width='400'height='400'frameborder='0'style='border:0'src='" + address + "' allowfullscreen></iframe></div>";

            $("#infoForPhone").html(htmlContent);


            //上一頁點擊
            $("#back").click(function () {
                $("#infoForPhone").toggle(500);
                $("#map").toggle(500);
                $("#informationBar").toggle(500);
             
            })


        }


    })



    //搜尋點擊
    $("#searching").click(function () {

        if ($("#searchBar").val() != '') {

            var searchResult = '';

            var searchString = $("#searchBar").val();

            $(".nav.nav-tabs").hide();

            for (var i = 0; i < position.length; i++) {

                if (position[i].address.indexOf(searchString) != -1) {
                
                    searchResult += "<div class='card card-block' lat=" + position[i].lat + " lng=" + position[i].lng + " area =" + position[i].area + "><p class='card-text'>" + position[i].address + "</p><span class='fa fa-chevron-down'aria-hidden='true'></span><hr></div>"

                }                   
            }

            if (searchResult!='')
            $("#north").html(searchResult)
            else          
                $("#north").html("<h5>關鍵字: <i>" + searchString + "</i> 查無資料</h5>")

        }

    })

    $("#clearBtn").click(function () {

        $("#searchBar").val('');

        $(".nav.nav-tabs").show();

        loadLocation();
    })

}

//加入標籤圖示
function addMarker(e) {
    setTimeout(function () {
        markers.push(new google.maps.Marker({
            position: {
                lat: position[e].lat,
                lng: position[e].lng
            },      
            title: position[e].address,
            map: map,
            animation: google.maps.Animation.DROP
        }));
    }, e * 10);


}

//搜索列載入資訊
function loadLocation() {

    var contentN = '';
    var contentC = '';
    var contentS = '';
    var contentE = '';

    for (var i = 0; i < position.length; i++) {

        if (position[i].area == '北區') {
           
            contentN += "<div class='card card-block' lat=" + position[i].lat + " lng=" + position[i].lng + " area =" + position[i].area + "><p class='card-text'>" + position[i].address + "</p><span class='fa fa-chevron-down'aria-hidden='true'></span><hr></div>"
        }
        else if (position[i].area == '中區') {
         
            contentC += "<div class='card card-block' lat=" + position[i].lat + " lng=" + position[i].lng + " area =" + position[i].area + "><p class='card-text'>" + position[i].address + "</p><span class='fa fa-chevron-down'aria-hidden='true'></span><hr></div>"
        }
        else if (position[i].area == '南區') {
           
            contentS += "<div class='card card-block' lat=" + position[i].lat + " lng=" + position[i].lng + " area =" + position[i].area + "><p class='card-text'>" + position[i].address + "</p><span class='fa fa-chevron-down'aria-hidden='true'></span><hr></div>"
        }
        else if (position[i].area == '東區') {

            contentE += "<div class='card card-block' lat=" + position[i].lat + " lng=" + position[i].lng + " area =" + position[i].area + "><p class='card-text'>" + position[i].address + "</p><span class='fa fa-chevron-down'aria-hidden='true'></span><hr></div>"
        }
    }


    $("#north").html(contentN)
    $("#central").html(contentC)
    $("#south").html(contentS)
    $("#east").html(contentE)

}

//點擊圖標彈出資訊視窗事件註冊
function addEvent(e) {
    setTimeout(function () {

        markers[e].addListener('click', function () {
            if (infowindow != undefined)
                infowindow.close();
            map.setCenter(markers[e].position);
            map.setZoom(15);
            infowindow = new google.maps.InfoWindow({
                content: "<div>" + markers[e].title + "</div>"
            });

            infowindow.open(map, markers[e]);
        })

    }, e * 50)


}


//開啟資訊視窗

function openInfo(e) {


    infowindow = new google.maps.InfoWindow({
        content: "<div>" + e.find($(".card-text")).text() + "</div>"
    });


    var whichOne;

    for (var j = 0; j < markers.length; j++) {

        if (markers[j].title == e.find($(".card-text")).text()) {
            whichOne = j;
            continue;
        }

    }

    infowindow.open(map, markers[whichOne]);

}