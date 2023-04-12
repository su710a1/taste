document.write("列印JavaScript");
// 單行註解
/*
    多行註解
*/
/*
資料型態 javascript 原生型別
1. 數值 number javascript 唯一的數值型別 整數或帶有小數的浮點數
*/
// 1. 宣告變數 var 2. 變數名稱 英文開頭+數字+底線(_),設計有意義的名稱
var a;
var b=5;
var c=1+8;
var d, e;
var f=6, g=15;
var h=0.1+0.2;
var i=0.1+0.3;
document.write("<br>",a);
document.write("<br>",h); // 不是0.3
document.write("<br>",i);
/*
javascript 數字是採用 IEEE 754 雙精確度(64位元)格式儲存 ; 因為電腦只認識0與1,十進位轉換為二進位時產生精確度誤差,需首需手動排除

1. 將數值比例放大,變成非浮點數,運算之後再除以放大的倍數
    var h=( 0.1*10 + 0.2*10 )/10;
2. 內建 toFixed 函數強制取到小數點的指定位數
    document.write("<br>",h.toFixed(1));
*/

/*
2. 字串 String
由 0 個或 0 個以上的字元結合而成,用一對雙引號(")或單引號(')框住字元,擇一使用
字串的長度 Length (字串物件屬性)
引號之內有「空格」,會計算在長度之中
*/
a="0.5 + 0.2";
b="0.5" + 0.2;
c=0.5+0.2;
document.write("<br>",a.length,"  ",a);
document.write("<br>",b.length,"  ",b);
document.write("<br>",c.length,"  ",c);

/*
3. 布林 boolean
只有兩種值, true(1)與 false(0)
任何值都可以被轉換成布林值
1. false 0 空字串 NaN null undefined 都會成為 false
2. 除了上述的其他值都會成為 true
*/
document.write("<br>",Boolean(a),"  ",a);
a="";
document.write("<br>",Boolean(a),"  ",a);

/*
4. 未定義 undefined
    4-1 變數沒有被宣告,沒有給值 ( 瀏覽器新版本會擋 )
    4-2 有宣告變數,沒有給指定變數的值
*/
//j;
//document.write("<br>",k);

/*
5. 空值 null
    清除某個變數的值
*/
document.write("<br>","空字串",a); // 有型態
a=null;
document.write("<br>","空值",a); // 沒有型態

/*
    等號用法
    1. = 將右邊的值賦予給左邊的變數
    2. == 左邊的值要與右邊的值相等
    3. === 左邊的值要與右邊的值相等,包含型態
*/
a=12;
b="12";
document.write("<br>","12=='12'  ",Boolean(a==b));
document.write("<br>","12==='12'  ",Boolean(a===b));

