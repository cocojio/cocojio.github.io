<?php $IP = $_SERVER['SERVER_ADDR'];?>
<?php $URL = $_SERVER['HTTP_HOST'];?>
<meta name="referrer" content="never">
<html>

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="renderer" content="webkit">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<link rel="shortcut icon" href="/favicon.ico">
		<link rel="stylesheet" type="text/css" href="css/style.css" />
		<title>客厅服务器</title>
	</head>
	<body>
		<div id="wrap">
				<div id="logo">
					<img class="logo" src="img/logo.png">
					<!-- <h1>粒子云服务器</h1> -->
					<div id="kg-btn" class="">
						<input class='tgl tgl-flip' id='qieh' type='checkbox' />
						<label class='tgl-btn' data-tg-off='外网' data-tg-on='内网' for='qieh'></label>
				</div>
			</div>
			<div id="main">
			<!-- 外网访问地址 -->
				<div id="app" class="app animated fadeInLeft">
					<ul>
						<li>
							<a href="http://<?php echo $IP;?>:88" target="_blank"><img class="shake" src="img/png/Settings.png" /><strong>控制台</strong></a>
						</li>
                              <li>
							<a href="http://<?php echo $IP;?>:8096" target="_blank"><img class="shake" src="img/png/jellyfin.png" /><strong>影视(章鱼)</strong></a>
						</li>
                             <li>
							<a href="http://<?php echo $IP;?>:8096" target="_blank"><img class="shake" src="img/png/jellyfin.png" /><strong>影视(NAS)</strong></a>
						</li>





						
						<li>
							<a href="/kode/" target="_blank"><img class="shake" src="img/png/iCloud-Drive.png" /><strong>可道云</strong></a>
						</li>
						<li>
							<a href="http://<?php echo $IP;?>:9080" target="_blank"><img class="shake" src="img/png/qb.png" /><strong>qBittorrent</strong></a>
						</li>
						<li>
							<a href="/lychee/" target="_blank"><img class="shake" src="img/png/Photos.png" /><strong>相册</strong></a>
						</li>
						
						<li>
							<a href="http://<?php echo $IP;?>:81" target="_blank"><img class="shake" src="img/png/tz.png" /><strong>探针</strong></a>
						</li>
						<li>
							<a href="/ariang/" target="_blank"><img class="shake" src="img/png/Downloads.png" /><strong>AriaNg</strong></a>
						</li>

						<li>
							<a href="/office/" target="_blank"><img class="shake" src="img/png/office.png" /><strong>OFFICE</strong></a>
						</li>
						<li>
							<a href="http://<?php echo $IP;?>:9091" target="_blank"><img class="shake" src="img/png/Transmission.png" /><strong>Transmission</strong></a>
						</li> 
						
						<li>
							<a href="http://<?php echo $IP;?>:8088" target="_blank"><img class="shake" src="img/png/fb.png" /><strong>FileBrowser</strong></a>
						</li>
						  <li>
							<a href="/phpmyadmin/" target="_blank"><img class="shake" src="img/png/phpmyadmin.png" /><strong>phpMyAdmin</strong></a>
						</li>
						<li>
							<a href="http://<?php echo $IP;?>:8897" target="_blank"><img class="shake" src="img/png/easyexplorer.png" /><strong>易有云2.0</strong></a>
						</li> 
						<li>
							<a href="http://<?php echo $IP;?>:83" target="_blank"><img class="shake" src="img/png/wordpress.png" /><strong>Typecho</strong></a>
						</li> 						
						<li>
							<a href="http://<?php echo $IP;?>:4200" target="_blank"><img class="shake" src="img/png/ttyd.png" /><strong>超级终端</strong></a>
						</li> 
						<li>
							<a href="http://<?php echo $IP;?>:8886" target="_blank"><img class="shake" src="img/png/verysync.png" /><strong>威力同步</strong></a>
						</li> 
						<li>
							<a href="https://blog.windtech.cf" target="_blank"><img class="shake" src="img/png/wind.png" /><strong>乘风的博客</strong></a>
						</li> 
					</ul>
				</div>
				<!-- 内网网访问地址 -->
				<div id="app1" class="app animated fadeInRight">
					<ul>
						<li>
							<a href="http://<?php echo $IP;?>:88" target="_blank"><img class="shake" src="img/png/Settings.png" /><strong>控制台</strong></a>
						</li>
						<li>
							<a href="/kode/" target="_blank"><img class="shake" src="img/png/iCloud-Drive.png" /><strong>可道云</strong></a>
						</li>
						<li>
							<a href="http://<?php echo $IP;?>:9080" target="_blank"><img class="shake" src="img/png/qb.png" /><strong>qBittorrent</strong></a>
						</li>
						<li>
							<a href="/lychee/" target="_blank"><img class="shake" src="img/png/Photos.png" /><strong>相册</strong></a>
						</li>
						<li>
							<a href="http://<?php echo $IP;?>:8096" target="_blank"><img class="shake" src="img/png/jellyfin.png" /><strong>视频</strong></a>
						</li>
						<li>
							<a href="http://<?php echo $IP;?>:81" target="_blank"><img class="shake" src="img/png/tz.png" /><strong>探针</strong></a>
						</li>
						<li>
							<a href="/ariang/" target="_blank"><img class="shake" src="img/png/Downloads.png" /><strong>AriaNg</strong></a>
						</li>

						<li>
							<a href="/office/" target="_blank"><img class="shake" src="img/png/office.png" /><strong>OFFICE</strong></a>
						</li>
						<li>
							<a href="http://<?php echo $IP;?>:9091" target="_blank"><img class="shake" src="img/png/Transmission.png" /><strong>Transmission</strong></a>
						</li> 
						
						<li>
							<a href="http://<?php echo $IP;?>:8088" target="_blank"><img class="shake" src="img/png/fb.png" /><strong>FileBrowser</strong></a>
						</li>
						  <li>
							<a href="/phpmyadmin/" target="_blank"><img class="shake" src="img/png/phpmyadmin.png" /><strong>phpMyAdmin</strong></a>
						</li>
						<li>
							<a href="http://<?php echo $IP;?>:8897" target="_blank"><img class="shake" src="img/png/easyexplorer.png" /><strong>易有云2.0</strong></a>
						</li> 
						<li>
							<a href="http://<?php echo $IP;?>:83" target="_blank"><img class="shake" src="img/png/wordpress.png" /><strong>Typecho</strong></a>
						</li> 						
						<li>
							<a href="http://<?php echo $IP;?>:4200" target="_blank"><img class="shake" src="img/png/ttyd.png" /><strong>超级终端</strong></a>
						</li> 
						<li>
							<a href="http://<?php echo $IP;?>:8886" target="_blank"><img class="shake" src="img/png/verysync.png" /><strong>威力同步</strong></a>
						</li> 
						<li>
							<a href="https://blog.windtech.cf" target="_blank"><img class="shake" src="img/png/wind.png" /><strong>乘风的博客</strong></a>
						</li> 
					</ul>
				</div>
				<div style="clear: both;"></div>
			</div>
		</div>
		<script src="js/jquery.min.js"></script>
	</body>
</html>