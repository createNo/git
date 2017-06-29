var http = require("http")
var fs = require("fs")
http.createServer(function(req,res){
	var url=req.url;
	switch(url){
		case "/":fs.readFile("index.html","utf-8",function(err,data){
					if(err){
						console.log("读取失败")
						console.log(err)
					}else{
						res.writeHead(200,"content-type:text/html;charset=utf-8")
						res.write(data)
						res.end()
					}
				})
		break;
		case "/index.html":fs.readFile("index.html","utf-8",function(err,data){
					if(err){
						console.log("读取失败")
						console.log(err)
					}else{
						res.writeHead(200,"content-type:text/html;charset=utf-8")
						res.write(data)
						res.end()
					}
				})
		break;
		case "/index1.html":fs.readFile("index1.html","utf-8",function(err,data){
					if(err){
						console.log("读取失败")
						console.log(err)
					}else{
						res.writeHead(200,"content-type:text/html;charset=utf-8")
						res.write(data)
						res.end()
					}
				})
		break;
		case "/index2.html":fs.readFile("index2.html","utf-8",function(err,data){
					if(err){
						console.log("读取失败")
						console.log(err)
					}else{
						res.writeHead(200,"content-type:text/html;charset=utf-8")
						res.write(data)
						res.end()
					}
				})
		break;
		case "/css/index.css":fs.readFile("css/index.css","utf-8",function(err,data){
								if(err){
									console.log("读取失败")
									console.log(err)
								}else{
									res.writeHead(200,"content-type:text/css;charset=utf-8")
									res.write(data)
									res.end()
								}
							})
		break;
		case "/js/index.js":fs.readFile("js/index.js","utf-8",function(err,data){
								if(err){
									console.log("读取失败")
									console.log(err)
								}else{
									res.writeHead(200,"content-type:text/javascript;charset=utf-8")
									res.write(data)
									res.end()
								}
							})
		break;
		case "/img/1.jpg":fs.readFile("img/1.jpg",function(err,data){
								if(err){
									console.log("读取失败")
									console.log(err)
								}else{
									res.writeHead(200,"content-type:image/jpeg;charset=utf-8")
									res.write(data)
									res.end()
								}
							})
		break;
		default:fs.readFile("index3.html","utf-8",function(err,data){
					if(err){
						console.log("读取失败")
						console.log(err)
					}else{
						res.writeHead(200,"content-type:text/html;charset=utf-8")
						res.write(data)
						res.end()
					}
				})
		break;
	}
}).listen(3000)
