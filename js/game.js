$(document).ready(function(){
/* 拖动 */
$('.player').drag({});
function game(bulletTime,bulletSpeed,enemyTime,enemySpeed,score,maxWidth,minWidth,maxLife,minLife,playerLife,enemyHit,playerBomb){
	/* 初始化 */
	var _bulletTime = bulletTime;
	var _bulletSpeed = bulletSpeed;
	var _enemyTime = enemyTime;
	var _enemySpeed = enemySpeed;
	var _score = score;
	var _maxWidth = maxWidth;
	var _minWidth = minWidth;
	var _maxLife = maxLife;
	var _minLife = minLife;
	var _playerLife = playerLife;
	var _enemyHit = enemyHit;
	var _playerBomb = playerBomb;
	$('.player').fadeIn(0);
	$('.bg').height($(window).height());
	$('.kill').fadeIn(0);
	$('.kill').html('本轮积分：0');
	$('.level').fadeIn(0);
	$('.level').html('LEVEL 1');
	$('.life').fadeIn(0);
	$('.life').html('剩余生命：' + _playerLife);
	$('.bomb').fadeIn(0);
	$('.bomb').html('炸弹：' + _playerBomb);
	$('.player').removeClass('end');
	$('.player').fadeIn(0);
	$('.player').animate({'top':$(window).height() - 100 + 'px','left':$(window).width()/2 - 55 + 'px'},0);
	$.each($('.bg').find('img'),function(){
		$(this).attr('src','images/bg1.jpg');
	});
	$('.bg').find('img').eq(0).css({'margin-top':-$('.bg').find('img').eq(0).height() + 'px'},0);
	/* 背景地图 */
	var dis = parseInt($('.bg').find('img').eq(0).css('margin-top'));
	var mapAct = setInterval(function(){
		dis++;
		$('.bg').find('img').eq(0).css({'margin-top':dis + 'px'},0);
		if(dis == 0){
			dis = -$('.bg').find('img').eq(0).height();
		}
	},10);
	/* 子弹生成 */
	var bulletAct = setInterval(function(){
		$('body').append('<span class="bullet"><img src="images/bullet.png" /></span>');
		$('.bullet:last').animate({'left':parseInt($('.player').css('left')) + 30 + 'px','top':parseInt($('.player').css('top')) - 41 + 'px'},0);
		$('.bullet:last').animate({'top':'-50px'},bulletSpeed);
	},bulletTime);
	/* 敌人生成 */
	var enemyLife = Math.floor(Math.random() * (_maxLife - _minLife + 1) + _minLife);
	var enemyAct = setInterval(function(){
		enemyLife = Math.floor(Math.random() * (_maxLife - _minLife + 1) + _minLife);
		$('body').append('<span class="enemy" value="' + enemyLife + '"><img src="images/enemy' + enemyLife + '.png" /></span>');
		$('.enemy:last').animate({'width':Math.random() * (maxWidth - minWidth) + minWidth + 'px'},0);
		$('.enemy:last').animate({'height':$('.enemy:last').width()*3/4 + 'px','top':-$('.enemy:last').width()*3/4 + 'px','left':Math.random() * ($(window).width() - $('.enemy:last').width())},0);
		$('.enemy:last').animate({'top':$(window).height() + $('.enemy:last').width() + 'px'},$('.enemy:last').width()*enemySpeed);
	},enemyTime);
	/* 等级提升 */
	var timeSpot1 = setTimeout(function(){
		clearInterval(enemyAct);
		enemyAct = setInterval(function(){
			enemyLife = Math.floor(Math.random() * (_maxLife - _minLife + 1) + _minLife);
			$('body').append('<span class="enemy" value="' + enemyLife + '"><img src="images/enemy' + enemyLife + '.png" /></span>');
			$('.enemy:last').animate({'width':Math.random() * (maxWidth - minWidth) + minWidth + 'px'},0);
			$('.enemy:last').animate({'height':$('.enemy:last').width()*3/4 + 'px','top':-$('.enemy:last').width()*3/4 + 'px','left':Math.random() * ($(window).width() - $('.enemy:last').width())},0);
			$('.enemy:last').animate({'top':$(window).height() + $('.enemy:last').width() + 'px'},$('.enemy:last').width()*enemySpeed/1.2);
		},enemyTime/1.2);
		$('.level').html('LEVEL 2');
		$.each($('.bg').find('img'),function(){
			$(this).attr('src','images/bg2.jpg');
		});
	},25000);
	var timeSpot2 = setTimeout(function(){
		clearInterval(enemyAct);
		enemyAct = setInterval(function(){
			enemyLife = Math.floor(Math.random() * (_maxLife - _minLife + 1) + _minLife);
			$('body').append('<span class="enemy" value="' + enemyLife + '"><img src="images/enemy' + enemyLife + '.png" /></span>');
			$('.enemy:last').animate({'width':Math.random() * (maxWidth - minWidth) + minWidth + 'px'},0);
			$('.enemy:last').animate({'height':$('.enemy:last').width()*3/4 + 'px','top':-$('.enemy:last').width()*3/4 + 'px','left':Math.random() * ($(window).width() - $('.enemy:last').width())},0);
			$('.enemy:last').animate({'top':$(window).height() + $('.enemy:last').width() + 'px'},$('.enemy:last').width()*enemySpeed/1.5);
		},enemyTime/1.5);
		$('.level').html('LEVEL 3');
		$.each($('.bg').find('img'),function(){
			$(this).attr('src','images/bg3.jpg');
		});
	},50000);
	var timeSpot3 = setTimeout(function(){
		clearInterval(enemyAct);
		enemyAct = setInterval(function(){
			enemyLife = Math.floor(Math.random() * (_maxLife - _minLife + 1) + _minLife);
			$('body').append('<span class="enemy" value="' + enemyLife + '"><img src="images/enemy' + enemyLife + '.png" /></span>');
			$('.enemy:last').animate({'width':Math.random() * (maxWidth - minWidth) + minWidth + 'px'},0);
			$('.enemy:last').animate({'height':$('.enemy:last').width()*3/4 + 'px','top':-$('.enemy:last').width()*3/4 + 'px','left':Math.random() * ($(window).width() - $('.enemy:last').width())},0);
			$('.enemy:last').animate({'top':$(window).height() + $('.enemy:last').width() + 'px'},$('.enemy:last').width()*enemySpeed/1.8);
		},enemyTime/1.8);
		$('.level').html('LEVEL 4');
		$.each($('.bg').find('img'),function(){
			$(this).attr('src','images/bg4.jpg');
		});
	},75000);
	var timeSpot4 = setTimeout(function(){
		clearInterval(enemyAct);
		enemyAct = setInterval(function(){
			enemyLife = Math.floor(Math.random() * (_maxLife - _minLife + 1) + _minLife);
			$('body').append('<span class="enemy" value="' + enemyLife + '"><img src="images/enemy' + enemyLife + '.png" /></span>');
			$('.enemy:last').animate({'width':Math.random() * (maxWidth - minWidth) + minWidth + 'px'},0);
			$('.enemy:last').animate({'height':$('.enemy:last').width()*3/4 + 'px','top':-$('.enemy:last').width()*3/4 + 'px','left':Math.random() * ($(window).width() - $('.enemy:last').width())},0);
			$('.enemy:last').animate({'top':$(window).height() + $('.enemy:last').width() + 'px'},$('.enemy:last').width()*enemySpeed/2);
		},enemyTime/2);
		$('.level').html('LEVEL 5');
		$.each($('.bg').find('img'),function(){
			$(this).attr('src','images/bg5.jpg');
		});
	},100000);
	/* 主游戏 */
	var kill = 0;
	var itemCase = Math.random();
	var itemAct1,itemAct2,itemAct3,itemAct4,itemAct5,itemAct6,itemAct7;
	var mainAct = setInterval(function(){
		/* 子弹碰撞敌人 */
		$.each($('.enemy:not(".current")'),function(){
			var _this = $(this);
			if(parseInt(_this.css('top')) >= $(window).height() + _this.height()){
				_this.remove();
				_playerLife -= _enemyHit;
				$('.life').html('剩余生命：' + _playerLife);
				if(_playerLife <= 0){
					$('.life').html('你挂了！');
					$('.player').addClass('end');
					bulletTime = _bulletTime;
					score = _score;
					enemySpeed = _enemySpeed;
					$('.statue').find('li').eq(0).fadeOut(0);
					$('.statue').find('li').eq(1).fadeOut(0);
					$('.statue').find('li').eq(2).fadeOut(0);
					$('.statue').find('li').eq(3).fadeOut(0);
					$('.statue').find('li').eq(4).fadeOut(0);
					$('.statue').find('li').eq(5).fadeOut(0);
					$('.statue').find('li').eq(6).fadeOut(0);
					$('.statue').find('li').eq(7).fadeOut(0);
					clearInterval(bulletAct);
					clearInterval(mapAct);
					clearInterval(enemyAct);
					clearTimeout(itemAct1);
					clearTimeout(itemAct2);
					clearTimeout(itemAct3);
					clearTimeout(itemAct4);
					clearTimeout(itemAct5);
					clearTimeout(itemAct6);
					clearTimeout(itemAct7);
					clearTimeout(timeSpot1);
					clearTimeout(timeSpot2);
					clearTimeout(timeSpot3);
					clearTimeout(timeSpot4);
					$('.player').removeClass('cheater');
				}
			}
			$.each($('.bullet'),function(){
				if(parseInt($(this).css('top')) <= -50){
					$(this).remove();
				}
				if(parseInt($(this).css('top')) > parseInt(_this.css('top')) - $(this).height() && parseInt($(this).css('top')) < parseInt(_this.css('top')) + _this.height() && parseInt($(this).css('left')) > parseInt(_this.css('left')) - $(this).width() && parseInt($(this).css('left')) < parseInt(_this.css('left')) + _this.width()){
					$(this).remove();
					_this.attr('value',parseInt(_this.attr('value')) - 1);
					if(parseInt(_this.attr('value')) == 0){
						if(_this.width() <= 70){
							kill+=(score*3);
						}if(_this.width() <= 90 && _this.width() > 70){
							kill+=(score*2);
						}else{
							kill+=score;
						}
						$('.kill').html('本轮积分：' + kill);
						_this.addClass('current');
						/* 获得道具 */
						itemCase = Math.random();
						if(itemCase <= 0.01){
							clearInterval(bulletAct);
							clearTimeout(itemAct1);
							bulletAct = setInterval(function(){
								$('body').append('<span class="bullet"><img src="images/bullet.png" /></span>');
								$('.bullet:last').animate({'left':parseInt($('.player').css('left')) + 30 + 'px','top':parseInt($('.player').css('top')) - 41 + 'px'},0);
								$('.bullet:last').animate({'top':'-50px'},bulletSpeed);
							},50);
							_this.find('img').attr('src','images/item1.png');
							_this.stop().animate({'width':'50px','height':'50px','z-index':'500'},0);
							setTimeout(function(){
								_this.animate({'width':'20px','height':'20px','top':'10px','left':'10px'},2000);
							},1000);
							setTimeout(function(){
								_this.remove();
							},3000);
							$('.statue').find('li').eq(1).fadeIn(0);
							itemAct1 = setTimeout(function(){
								clearInterval(bulletAct);
								bulletAct = setInterval(function(){
									$('body').append('<span class="bullet"><img src="images/bullet.png" /></span>');
									$('.bullet:last').animate({'left':parseInt($('.player').css('left')) + 30 + 'px','top':parseInt($('.player').css('top')) - 41 + 'px'},0);
									$('.bullet:last').animate({'top':'-50px'},bulletSpeed);
								},_bulletTime);
								$('.statue').find('li').eq(1).fadeOut(0);
							},5000);
						}else if(itemCase > 0.01 && itemCase <= 0.03){
							score = _score;
							clearTimeout(itemAct2);
							_this.find('img').attr('src','images/item2.png');
							_this.stop().animate({'width':'50px','height':'50px','z-index':'500'},0);
							setTimeout(function(){
								_this.animate({'width':'20px','height':'20px','top':'10px','left':'10px'},2000);
							},1000);
							setTimeout(function(){
								_this.remove();
							},3000);
							$('.statue').find('li').eq(2).fadeIn(0);
							score = score*2;
							itemAct2 = setTimeout(function(){
								score = _score;
								$('.statue').find('li').eq(2).fadeOut(0);
							},5000);
						}else if(itemCase > 0.03 && itemCase <= 0.04){
							enemySpeed = _enemySpeed;
							clearTimeout(itemAct3);
							_this.find('img').attr('src','images/item3.png');
							_this.stop().animate({'width':'50px','height':'50px','z-index':'500'},0);
							setTimeout(function(){
								_this.animate({'width':'20px','height':'20px','top':'10px','left':'10px'},2000);
							},1000);
							setTimeout(function(){
								_this.remove();
							},3000);
							$('.statue').find('li').eq(3).fadeIn(0);
							enemySpeed = enemySpeed*2;
							itemAct3 = setTimeout(function(){
								enemySpeed = _enemySpeed;
								$('.statue').find('li').eq(3).fadeOut(0);
							},5000);
						}else if(itemCase > 0.04 && itemCase <= 0.09){
							_playerLife += 10;
							$('.life').html('剩余生命：' + _playerLife);
							clearTimeout(itemAct4);
							_this.find('img').attr('src','images/item4.png');
							_this.stop().animate({'width':'50px','height':'50px','z-index':'500'},0);
							setTimeout(function(){
								_this.animate({'width':'20px','height':'20px','top':'10px','left':'10px'},2000);
							},1000);
							setTimeout(function(){
								_this.remove();
							},3000);
							$('.statue').find('li').eq(4).fadeIn(0);
							itemAct4 = setTimeout(function(){
								$('.statue').find('li').eq(4).fadeOut(0);
							},5000);
						}else if(itemCase > 0.09 && itemCase <= 0.1){
							_playerLife += 50;
							$('.life').html('剩余生命：' + _playerLife);
							clearTimeout(itemAct5);
							_this.find('img').attr('src','images/item5.png');
							_this.stop().animate({'width':'50px','height':'50px','z-index':'500'},0);
							setTimeout(function(){
								_this.animate({'width':'20px','height':'20px','top':'10px','left':'10px'},2000);
							},1000);
							setTimeout(function(){
								_this.remove();
							},3000);
							$('.statue').find('li').eq(5).fadeIn(0);
							itemAct5 = setTimeout(function(){
								$('.statue').find('li').eq(5).fadeOut(0);
							},5000);
						}else if(itemCase > 0.1 && itemCase <= 0.11){
							$('.player').addClass('shield');
							clearTimeout(itemAct6);
							_this.find('img').attr('src','images/item6.png');
							_this.stop().animate({'width':'50px','height':'50px','z-index':'500'},0);
							setTimeout(function(){
								_this.animate({'width':'20px','height':'20px','top':'10px','left':'10px'},2000);
							},1000);
							setTimeout(function(){
								_this.remove();
							},3000);
							$('.statue').find('li').eq(6).fadeIn(0);
							itemAct6 = setTimeout(function(){
								$('.player').removeClass('shield');
								$('.statue').find('li').eq(6).fadeOut(0);
							},5000);
						}else if(itemCase > 0.11 && itemCase <= 0.12){
							_playerBomb++;
							$('.bomb').html('炸弹：' + _playerBomb);
							clearTimeout(itemAct7);
							_this.find('img').attr('src','images/item7.png');
							_this.stop().animate({'width':'50px','height':'50px','z-index':'500'},0);
							setTimeout(function(){
								_this.animate({'width':'20px','height':'20px','top':'10px','left':'10px'},2000);
							},1000);
							setTimeout(function(){
								_this.remove();
							},3000);
							$('.statue').find('li').eq(7).fadeIn(0);
							itemAct4 = setTimeout(function(){
								$('.statue').find('li').eq(7).fadeOut(0);
							},5000);
						}else{
							_this.find('img').attr('src','images/die.png');
							setTimeout(function(){
								_this.remove();
							},200);
						}
					}
				}
			});
			/* 敌人碰撞玩家 */
			$.each($('.player:not(".end"):not(".bling"):not(".cheater"):not(".shield")'),function(){
				if(parseInt($(this).css('top')) > parseInt(_this.css('top')) - $(this).height() && parseInt($(this).css('top')) < parseInt(_this.css('top')) + _this.height() && parseInt($(this).css('left')) > parseInt(_this.css('left')) - $(this).width() && parseInt($(this).css('left')) < parseInt(_this.css('left')) + _this.width()){
					_this.remove();
					_playerLife -= 10;
					$('.life').html('剩余生命：' + _playerLife);
					if($('.end').length == 0){
						$(this).addClass('bling');
						setTimeout(function(){
							$('.player').removeClass('bling');
						},600);
						$('.player').fadeOut(100);
						$('.player').fadeIn(100);
						$('.player').fadeOut(100);
						$('.player').fadeIn(100);
						$('.player').fadeOut(100);
						$('.player').fadeIn(100);
					}
					if(_playerLife <= 0){
						$('.life').html('你挂了！');
						$('.player').addClass('end');
						bulletTime = _bulletTime;
						score = _score;
						enemySpeed = _enemySpeed;
						$('.statue').find('li').eq(0).fadeOut(0);
						$('.statue').find('li').eq(1).fadeOut(0);
						$('.statue').find('li').eq(2).fadeOut(0);
						$('.statue').find('li').eq(3).fadeOut(0);
						$('.statue').find('li').eq(4).fadeOut(0);
						$('.statue').find('li').eq(5).fadeOut(0);
						$('.statue').find('li').eq(6).fadeOut(0);
						$('.statue').find('li').eq(7).fadeOut(0);
						clearInterval(bulletAct);
						clearInterval(mapAct);
						clearInterval(enemyAct);
						clearTimeout(itemAct1);
						clearTimeout(itemAct2);
						clearTimeout(itemAct3);
						clearTimeout(itemAct4);
						clearTimeout(itemAct5);
						clearTimeout(itemAct6);
						clearTimeout(itemAct7);
						clearTimeout(timeSpot1);
						clearTimeout(timeSpot2);
						clearTimeout(timeSpot3);
						clearTimeout(timeSpot4);
						$('.player').removeClass('cheater');
					}
				}
			});
		});
		/* 游戏结束 */
		if($('.player').hasClass('end')){
			if($('.bullet').length == 0 && $('.enemy').length == 0){
				clearInterval(mainAct);
				$('.btn').fadeIn(0);
				$('.player').fadeOut(0);
				$('.kill').fadeOut(0);
				$('.bomb').fadeOut(0);
				$('.level').fadeOut(0);
				$('.life').fadeOut(0);
				$('.amount span').html(parseInt($('.amount span').html()) + parseInt(kill));
				$('.amount').fadeIn(0);
			}
		}
	},1);
	/* 使用炸弹 */
	$('.bomb').click(function(){
		if(_playerBomb <= 0){
			return false;
		}else{
			_playerBomb -= 1;
			$.each($('.enemy'),function(){
				$(this).remove();
				$('.bomb').html('炸弹：' + _playerBomb);
			});
		}
	});
}
/* 启动器 */
var bulletTime,bulletSpeed,enemyTime,enemySpeed,score,maxWidth,minWidth,maxLife,minLife,playerLife,enemyHit,playerBomb;
$('.difficulty').find('li').click(function(){
	$('.amount').fadeOut(0);
	bulletTime = parseInt($(this).attr('data-bulletTime'));
	bulletSpeed = parseInt($(this).attr('data-bulletSpeed'));
	enemyTime = parseInt($(this).attr('data-enemyTime'));
	enemySpeed = parseInt($(this).attr('data-enemySpeed'));
	score = parseInt($(this).attr('data-score'));
	maxWidth = parseInt($(this).attr('data-maxWidth'));
	minWidth = parseInt($(this).attr('data-minWidth'));
	maxLife = parseInt($(this).attr('data-maxLife'));
	minLife = parseInt($(this).attr('data-minLife'));
	playerLife = parseInt($(this).attr('data-playerLife'));
	enemyHit = parseInt($(this).attr('data-enemyHit'));
	playerBomb = parseInt($(this).attr('data-playerBomb'));
	$('.difficulty').fadeOut(0);
	game(bulletTime,bulletSpeed,enemyTime,enemySpeed,score,maxWidth,minWidth,maxLife,minLife,playerLife,enemyHit,playerBomb);
});
/* 开始 */
$('.start').click(function(){
	$('.bg').fadeIn(0);
	$('.difficulty').fadeIn(0);
});
$('.btn').find('li').eq(0).click(function(){
	$('.btn').fadeOut(0);
	$('.difficulty').fadeIn(0);
});
/* 作弊 */
var cheatCode = 0;
function cheater(){
	$('.kill').click(function(){
		cheatCode++;
		if(cheatCode%5 == 0){
			var name=prompt("请输入您的名字","");
			if(name == 'cheaters'){
				$('.player').addClass('cheater');
				$('.statue').find('li').eq(0).fadeIn(0);
			}else{
				$('.player').removeClass('cheater');
				$('.statue').find('li').eq(0).fadeOut(0);
			}
		}
		if(cheatCode%5 != 0){
			$('.player').removeClass('cheater');
			$('.statue').find('li').eq(0).fadeOut(0);
		}
	});
}
cheater();
});
/* 浏览器 */
document.ontouchmove = function(event){
	event.preventDefault();
}