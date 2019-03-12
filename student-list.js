colName=["學生姓名","Wordpress","PHP","Bisection","Newton Method","Cubic Spline Interpolation","Python","Matirx"];
stringList=["http://120.113.174.17/courses/201802/NA2/wordpress_","","/bisection","/newtonmethod","/cubicsplineinterpolation","/python","/matrix"];
data1=[["張宗信","1032676"],["何沛倫","1042631"],["楊麒薰","1042632"],["徐瑄翎","1042637"],["林逸凱","1042638"],["蘇柏嘉","1042640"],["褚育誠","1042641"],["黃俊維","1042643"],["陳昀陞","1042647"],["陳人誠","1042649"],["黃羿蓁","1042651"],["黃關旨","1042652"],["陳寬哲","1042653"],["徐崇哲","1042654"],["尤凱逸","1042655"],["陳姿蕙","1042657"],["林子閔","1042658"],["鍾禮鴻","1042661"],["楊育禎","1042666"],["胡澤駿","1042667"],["董曜德","1042670"],["蕭宇竣","1042678"],["林承寬","1042679"],["許濬濠","1042680"],["LOW SHEA HUI","1042682"]];
function createTable(data,stringList,colName){
	var tableString = "<table id=\"customers\">",
    div = document.getElementById("student-list");

    tableString += "<tbody><tr>";
    for (col = 0; col < colName.length; col += 1) {
    	tableString += "<th style=\"text-align: center;\">" + colName[col] + "</th>";
    }
    tableString += "</tr></tbody>";
	for (row = 0; row <data.length; row += 1) {
    	tableString += "<tr>";
    	tableString += "<td style=\"text-align: center;\">" + data[row][0] + "</td>";
    	//tableString += "<td style=\"text-align: center;\"><a href=\"" + stringList[0] + data[row][1] + "\" target=\"_blank\">";
    	//tableString += data[row][1] + "</a></td>";
    	//tableString += "<td style=\"text-align: center;\">" + data[row][1] + "</td>";
    	col=0
    	tableString += "<td style=\"text-align: center;\"><a href=\"" + stringList[col] + data[row][1] + "\" target=\"_blank\">" + data[row][1] + "</a></td>";
    	for (col = 1; col < stringList.length; col += 1) {
        	tableString += "<td style=\"text-align: center;\"><a href=\"http://120.113.174.17/courses/201802/students/s" + data[row][1] + stringList[col]+"\" target=\"_blank\">" + data[row][1] + "</a></td>";
    	}
    	tableString += "</tr>";
	}
	tableString += "</table>";
	div.innerHTML += tableString;
	//alert(tableString)
}
createTable(data1,stringList,colName);
