var ext="",num1,num2,op,opt;
var data=document.getElementById("out");
   function num(x)
   {
    data.value=ext+=x;
   }


   function oper(op)
   {
    num1=parseFloat(data.value);
    data.value="";
    ext="";
    opt=op;
   }


       function result()
       {
        num2=parseFloat(data.value);
        switch(opt)
        {
            case "+":
                data.value=num1+num2;
            break;

            case "-":
                data.value=num1-num2;
            break;
            case "/":
                data.value=num1/num2;
            break;
            case "*":
                data.value=num1*num2;
            break;
        }
       }