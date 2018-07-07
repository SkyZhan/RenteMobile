function insertSelectData(action,selectname,dicTypeCode,downselectname)//参数为数据字典的类型编码
{  
	
	if(dicTypeCode == null || dicTypeCode == '' ){
		alert("字典加载失败，请联系开发商");
		return ;
	}
	var selectValue = document.getElementById(selectname).value;//获取选择的下拉框的值 
	$.ajax({
		url : action,
		async : false,
		type : "POST",
		data : {"dicTypeCode" : dicTypeCode,"selectValue":selectValue},
		success : function(data){
			if(data != null && data != ''){
				 $('#'+downselectname).html(data.msg);
				 $(".chosen-select").trigger("chosen:updated");
			} else {
				$('#'+downselectname).html("");
				$(".chosen-select").trigger("chosen:updated");
			} 
		}	
	});
}

function loadSelectData(action,dicTypeCode,downselectname){//参数为数据字典的类型编码
	if(dicTypeCode == null || dicTypeCode == '' ){
		alert("字典加载失败，请联系开发商");
		return ;
	}
	$.ajax({
		url : action,
		async : false,
		type : "POST",
		data : {"dicTypeCode" : dicTypeCode},
		success : function(data){
			if(data != null && data != ''){
				
				 $('#'+downselectname).html(data.msg);
			 }else{
				 $('#'+downselectname).html("<option>请选择</option>");
			 }
		}	
	});
}

/**
 * 
 * @param action  访问路径
 * @param selectname  选择的节点
 * @param childname  子孩子的节点名称
 * @return
 */
function insertUserSelectData(action,selectname,childname)
{  
	var selectValue = document.getElementById(selectname).value;//获取选择的下拉框的值 
	var selectText = $("#"+selectname).find("option:selected").text();//获取选择的下拉框的值 
	$("#roleName").val(selectText);
	$.ajax({
		url : action,
		async : false,
		type : "POST",
		data : {"selectValue":selectValue},
		success : function(data){
			if(data != null && data != ''){
				 $('#'+childname).html(data.msg);
			 }else{
				 $('#'+childname).html("<option>请选择</option>");
			 }
		}	
	});
}


function userNameFun(selectname)
{  
	var selectText = $("#"+selectname).find("option:selected").text();//获取选择的下拉框的值 
	$("#userName").val(selectText);
}


