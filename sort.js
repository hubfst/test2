

var arr=["sp14","su15","fa14","ho15"];

var obj={
	"sp":1,
	"su":2,
	"fa":3,
	"ho":4
};

for(var i=0;i<arr.length;i++){
     var years=arr[i].slice(-2,2);
     console.log(years);
}
