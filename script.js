function copy(){
let getId = document.getElementById("command");
getId.select();
document.execCommand('copy');
}
function undo()
{
let getId = document.getElementById("command");
getId.select();
document.execCommand('undo');
}
function cut()
{
let getId = document.getElementById("command");
getId.select();
document.execCommand('cut');
}
function textdelete()
{
let getId = document.getElementById("command");
getId.select();
document.execCommand('delete');
}function sec() 
{
sec = 0;
setInterval(tick, 1000);
}
function tick() {
sec++;
document.getElementById("sec").childNodes[0].nodeValue = sec;
}
function min() 
{
min = 0;
setInterval(minutesTick, 1000);
}
function minutesTick() {
if (sec == 58) {
setTimeout(function() {
sec = -1;
min++;
console.log(`${min}`);
}, 1000);
}
document.getElementById("min").childNodes[0].nodeValue = min;
}
sec();
min();
