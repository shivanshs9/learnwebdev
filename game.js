gameon=1;
document.body.style.margin="0px";
c=document.getElementById('scr');
ctx=c.getContext('2d');
whomove=1;
board=[[0,-1,-2],[-3,-4,-5],[-6,-7,-8]];
function cross(a,b){
if(board[a][b]>0)return;
board[a][b]=1;k=!k;
var x=25+a*50,y=25+b*50;
ctx.beginPath();
ctx.moveTo(x-22,y-22);
ctx.lineTo(x+22,y+22);
ctx.moveTo(x+22,y-22);
ctx.lineTo(x-22,y+22);
ctx.stroke();
}
function circ(a,b){
if(board[a][b]>0)return;
board[a][b]=2;k=!k;
var x=25+a*50,y=25+b*50;
ctx.beginPath();
ctx.arc(x,y,22,0,2*Math.PI);
ctx.stroke();
}
function bg(){
ctx.fillStyle="white";
ctx.fillRect(0,0,150,150);
ctx.beginPath();
ctx.moveTo(0,50);
ctx.lineTo(150,50);
ctx.moveTo(0,100);
ctx.lineTo(150,100);
ctx.moveTo(50,0);
ctx.lineTo(50,150);
ctx.moveTo(100,0);
ctx.lineTo(100,150);
ctx.stroke();
}
function win(a,b,c,d){
gameon=0;
var x1=25+a*50,y1=25+b*50;
var x2=25+c*50,y2=25+d*50;
ctx.beginPath();
ctx.moveTo(x1,y1);
ctx.lineTo(x2,y2);
ctx.lineWidth=3;
ctx.strokeStyle="red";
ctx.stroke();
ctx.lineWidth=1;
ctx.strokeStyle="black";
}
bg();
k=0;
function computermove(){
tb=[[],[],[]];
for(i=0;i<3;i++)for(j=0;j<3;j++)tb[i][j]=board[i][j];
var mm=bestmove(tb,k,0);
move(mm[0],mm[1])
}
function bestmove(yo,z,dep){
var tm=[-1,-3,1],cou=0,km=[-5,-5,0];
for(var i=0;i<3;i++){
 for(var j=0;j<3;j++){
  
  if(yo[i][j]>0)continue;cou++;
  var xxx=yo[i][j];
  yo[i][j]=z+1;var yox=i,yoy=j;

  var t,zz=checkwin(yo);
yo[yox][yoy]=xxx;
if(zz==1){return [yox,yoy,2];}

}
}
for(var i=0;i<3;i++){
 for(var j=0;j<3;j++){
  
  if(yo[i][j]>0)continue;cou++;
  var xxx=yo[i][j];
  yo[i][j]=z+1;var yox=i,yoy=j;

  var t;
  var ttm=bestmove(yo,1-z,dep+1);
  if(ttm[2]==0){yo[yox][yoy]=xxx;return [yox,yoy,2];}
  if(ttm[2]==2){
yo[yox][yoy]=xxx;
km=[yox,yoy,0];
continue;
}
  if(ttm[2]==1){tm[0]=yox;tm[1]=yoy;tm[2]=1;};
  yo[yox][yoy]=xxx;
 }
}
if(cou==0||tm[0]!=-1)
return tm;
else return km;
}
function checkwin(a){
var zz=0;
for(var i=0;i<3;i++){
t=1;
for(var j=0;j<3;j++)if(a[i][0]!=a[i][j])t=0;
if(t)zz=1;
}
for(var i=0;i<3;i++){
t=1;
for(var j=0;j<3;j++)if(a[0][i]!=a[j][i])t=0;
if(t)zz=1;
}
if(a[0][0]==a[1][1]&&a[1][1]==a[2][2])zz=1;
if(a[0][2]==a[1][1]&&a[1][1]==a[2][0])zz=1;
return zz;
}
function move(x,y){
if(k)circ(x,y);
else cross(x,y);
var cccc=0;
for(var ii=0;ii<3;ii++)
for(var jj=0;jj<3;jj++)
if(board[ii][jj]<=0)cccc++;
if(cccc==0)gameon=0;
var a=board;
for(i=0;i<3;i++){
t=1;
for(j=0;j<3;j++)if(a[i][0]!=a[i][j])t=0;
if(t)win(i,-0.5,i,2.5);
}
for(i=0;i<3;i++){
t=1;
for(j=0;j<3;j++)if(a[0][i]!=a[j][i])t=0;
if(t)win(-0.5,i,2.5,i);
}
if(a[0][0]==a[1][1]&&a[1][1]==a[2][2])win(-0.5,-0.5,2.5,2.5);
if(a[0][2]==a[1][1]&&a[1][1]==a[2][0])win(-0.5,2.5,2.5,-0.5);
}
c.onclick=function(e){
if(gameon==0){
board=[[0,-1,-2],[-3,-4,-5],[-6,-7,-8]];
bg();
gameon=1;
k=0;
whomove=1-whomove;
if(whomove==0)computermove();
return;
}
move(Math.floor(e.x/50),Math.floor(e.y/50));
c.height;
if(gameon==1&&k==whomove)computermove();
}