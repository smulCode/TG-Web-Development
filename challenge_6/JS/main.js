function update(){
   let bigNumArry = new Array('', ' duizend', ' miljoen', ' biljoen',);

   let output = '';
   let numString =   document.getElementById('number').value;
   let finlOutPut = new Array();

    if (numString == '0') {
        document.getElementById('container').innerHTML = 'Nul';
        return;
    }

    if (numString == 0) {
        document.getElementById('container').innerHTML = 'type nummers';
        return;
    }

   let i = numString.length;
    i = i - 1;

    //cut the number to groups of three digits and add them to the Arry
    while (numString.length > 3) {
       let triDig = new Array(3);
        triDig[2] = numString.charAt(numString.length - 1);
        triDig[1] = numString.charAt(numString.length - 2);
        triDig[0] = numString.charAt(numString.length - 3);

       let varToAdd = triDig[0] + triDig[1] + triDig[2];
        finlOutPut.push(varToAdd);
        i--;
        numString = numString.substring(0, numString.length - 3);
    }
    finlOutPut.push(numString);
    finlOutPut.reverse();

    //convert each group of three digits to dutch word
    //if all digits are zero the triConvert
    //function return the string "dontAddBigSufix"
    for (j = 0; j < finlOutPut.length; j++) {
        finlOutPut[j] = triConvert(parseInt(finlOutPut[j]));
    }

    var bigScalCntr = 0; //this int mark the million billion trillion... Arry

    for (b = finlOutPut.length - 1; b >= 0; b--) {
        if (finlOutPut[b] != "dontAddBigSufix") {
            finlOutPut[b] = finlOutPut[b] + bigNumArry[bigScalCntr] + ' , ';
            bigScalCntr++;
        }
        else {
            //replace the string at finlOP[b] from "dontAddBigSufix" to empty String.
            finlOutPut[b] = ' ';
            bigScalCntr++; //advance the counter  
        }
    }

        //convert The output Arry to , more printable string 
        for(n = 0; n<finlOutPut.length; n++){
            output +=finlOutPut[n];
        }

    document.getElementById('container').innerHTML = output;//print the output
}

//simple function to convert from numbers to words from 1 to 999
function triConvert(num){
    var ones = new Array('', ' een', ' twee', ' drie', ' vier', 'vijf', 'zes', ' zeven', ' acht', ' negen', ' tien', ' elf', ' twaalf', ' dertien', ' veertien', ' vijftien', ' zestien', ' zeventien', ' achttien', ' negentien');
    var tens = new Array('', '', ' twintig', ' dertig', ' veertig', ' vijftig', ' zestig', ' zeventig', ' tachtig', ' negentig');
    var hundred = ' honderd';
    var output = '';
    var numString = num.toString();

    if (num == 0) {
        return 'dontAddBigSufix';
    }
    //the case of 10, 11, 12 ,13, .... 19 
    if (num < 20) {
        output = ones[num];
        return output;
    }

    //100 and more
    if (numString.length == 3) {
         output = ones[parseInt(numString.charAt(0))] + hundred;
        output += ones[parseInt(numString.charAt(2))] + "en";
        output += tens[parseInt(numString.charAt(1))];
        return output;
    }

    output += tens[parseInt(numString.charAt(0))];
    output += ones[parseInt(numString.charAt(1))];

    return output;
}   