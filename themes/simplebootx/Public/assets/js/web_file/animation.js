$(document).ready(function(e) {
	
	$('.reyou_layout_01 .elem').addClass('elem1_in');
	$('.reyou_layout_01 .text').addClass('text1_in');
	
	var w = $(window).width();
	
	$('.mobiles').click(function(){
		var isdisplay = $('.mmenu').attr('class');
		if(isdisplay.indexOf('showmenu')<0){
		$('.mmenu').addClass('showmenu');
		}else{
		$('.mmenu').removeClass('showmenu');
		}
	});
	
	if(w>768){
	
	$('#fullpage').fullpage({
		afterLoad: function(anchorLink, index){
			if(index == 1){
				$('.reyou_layout_01 .elem').removeClass('elem1_out');
				$('.reyou_layout_01 .elem').addClass('elem1_in');
				$('.reyou_layout_01 .text').removeClass('text1_out');
				$('.reyou_layout_01 .text').addClass('text1_in');
			}
			if(index == 2){
				$('.reyou_layout_02 .elem').removeClass('elem2_out');
				$('.reyou_layout_02 .elem').addClass('elem2_in');
				$('.reyou_layout_02 .text').removeClass('text2_out');
				$('.reyou_layout_02 .text').addClass('text2_in');
			}
			if(index == 3){
				$('.reyou_layout_03 .elem').removeClass('elem3_out');
				$('.reyou_layout_03 .elem').addClass('elem3_in');
				$('.reyou_layout_03 .text').removeClass('text3_out');
				$('.reyou_layout_03 .text').addClass('text3_in');
			}
		},
		onLeave: function(index, direction){
			if(index == 1){
				$('.reyou_layout_01 .elem').removeClass('elem1_in');
				$('.reyou_layout_01 .elem').addClass('elem1_out');
				$('.reyou_layout_01 .text').removeClass('text1_in');
				$('.reyou_layout_01 .text').addClass('text1_out');
			}
			if(index == 2){
				$('.reyou_layout_02 .elem').removeClass('elem2_in');
				$('.reyou_layout_02 .elem').addClass('elem2_out');
				$('.reyou_layout_02 .text').removeClass('text2_in');
				$('.reyou_layout_02 .text').addClass('text2_out');
			}
			if(index == 3){
				$('.reyou_layout_03 .elem').removeClass('elem3_in');
				$('.reyou_layout_03 .elem').addClass('elem3_out');
				$('.reyou_layout_03 .text').removeClass('text3_in');
				$('.reyou_layout_03 .text').addClass('text3_out');
			}
		}
	});
	
	}
	
	var isIE=!!window.ActiveXObject;
	var isIE6=isIE&&!window.XMLHttpRequest;
	if(isIE6){
		$('.reyou_head').hide();
		$('body').prepend('<div class="reyou_head">'+$('.reyou_head').html()+'</div>');	
	}
	
	
});