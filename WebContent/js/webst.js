/*
    来吧骚年 封装websocket
    by jamesloo
 */

var ws;// = new WebSocket("ws://192.168.31.122:8080");

function CreateWs(ip,port,addtion) 
{
    var linkestr = "ws://"+ip+":"+port+addtion;
    ws = new WebSocket(linkestr);
    console.log(linkestr);
    ws.onopen = function() 
    {
        console.log("onopen");
        
        //测试
        var v = {"vn":"0.1"};
        ToJson(v);
    }

    ws.onmessage = function(p1) 
    {
        console.log(p1.data);
    }
    

    ws.onclose = function(evt) 
    {
        console.log("websocket close!");
    }

    ws.onerror = function(event)
    {
        console.log();
    }
}



function SendMsg(msgtype,mydata)
{
	console.log("向服务器发送数据...");
	var finalstr = msgtype + mydata;
	ws.send(finalstr);
}

function ToJson(data)
{
	 console.log("ToJson...");
	 var myData =JSON.stringify(data);
	 SendMsg(MSG_CONNGUID,myData);
}

function FromJson()
{
	console.log("FromJson...");
	//数据json解析
    //var str=p1.substring(0,3);
    //var data=p1.substring(4,p1.length-4);
    //var object=data.paparseJSON(); //由JSON字符串转换为JSON对象
}

