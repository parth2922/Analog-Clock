function myFun(id,val)
{
      var v = 'rotate(' + val + ', 70, 70)';
      document.getElementById(id).setAttribute('transform', v);
}
function clock(){
    var d, hh, mm, ss;
    d = new Date;
      hh = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
      mm = 6 * d.getMinutes();
      ss = 6 * d.getSeconds();
        myFun('hour', hh);
        myFun('minute', mm);
        myFun('second', ss);
        setTimeout(clock, 1000);
}
window.onload=clock;
