$(function(){
	$(".seat-item").each(function(){
		if($(this).attr("state")==1){
			$(this).css("background-color","#888");
		}
	});
	$(".seat-item").click(function(){
		if($(this).attr("state")==0){
			if($(this).attr("select")==0){
				$("#seat-choosen ul").append('<li id="selected-'+$(this).attr("row")+'-'+$(this).attr("col")+'" class="choosen-item">'+$(this).attr("row")+"排"+$(this).attr("col")+"座"+'</li>');
				$(this).css("background-color","#E22");
				$(this).attr("select","1");
			}else if($(this).attr("select")==1){
				$(this).css("background-color","#FFF");
				$(this).attr("select","0");
				$("#seat-choosen ul #selected-"+$(this).attr("row")+"-"+$(this).attr("col")).remove();
			}
		}
	})
	.mousemove(function(event){
		var y=10,x=20;
		$("#seat-tip").show().css({
			"display":"block",
			"top":event.pageY+y+"px",
			"left":event.pageX-x+"px"
		}).html("<p>"+$(this).attr("row")+"排"+$(this).attr("col")+"座</p>");
		if($(this).attr("state")==1){
			$("#seat-tip").html("<p>已售</p>");
		}
		event.stopPropagation();
	})
	.mouseout(function(event){
		$("#seat-tip").fadeOut(10);
		event.stopPropagation();
	});
	$(".group-name").click(function(){
		$(".group-names").hide();
		$("#"+$(this).attr("href")).show();
		$(".back").show();
	});
	$(".back").click(function(){
		$(".group-names").show();
		$(".groups:visible").hide();
		$(this).hide();
	});
	$("#buy-form").validate({
		submitHandler:function(form){ 
			form.submit();
		},
		rules:{
			phone:{
				required:true,minlength:11
			},
			name:{
				required:true,minlength:2
			}
		},
		errorPlacement:function(error,element){
			error.appendTo(element.siblings("p"));
		},
		messages:{
			phone:{
				required:"请输入手机号",minlength:"请输入合法的手机号"
			},
			name:{
				required:"请输入姓名",minlength:"姓名太短"
			}
		},
		success:function(label){
			label.html("正确");
		},
	});
});