/*1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. 
(Araştırma konusu : şart blokları : if )*/


function findPrime(...primeNumbers){
    
    for (let i = 0; i < primeNumbers.length; i++) {
        let primeSum=0
        for (let j = 2; j < primeNumbers[i]; j++) {
            if(primeNumbers[i]%j==0 && primeNumbers[i]!=1 && primeNumbers[i]!=2 ){//burada asal olup olmadığı durumunu kontrol ediyorz.
                primeSum ++
            }
        }
        if (primeSum==0){
            console.log(primeNumbers[i]," Sayı asal bir sayıdır.")
        }
        else{
            console.log(primeNumbers[i]," Sayı asal değildir")
        }
        
    }
}

findPrime(2,6,8,11,36,45,75,77,99,100,101,299)



/* 2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
 (Arkadaş sayılar için google)*/

 function findFriendNumbers(number1,number2){
    let sum1=0;
    let sum2=0;

    for (let i = 0; i < number1; i++) {
        if(number1%i==0){
            sum1 += i;
        }
        if(number2%i == 0){
            sum2 += i ;
        }
        
    }
    if (sum1 == number2 && sum2 == number1) {
        console.log(number1 + " ve " + number2 + " arkadaş sayılardır.")
        
    }
    else{
        console.log("Sayılar arkadaş sayı değildir.")
    }


}
findFriendNumbers(20,284)


/* 3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız. */

for (let i = 1; i < 1000; i++) {
    let sum=0;
    for (let j = 0; j < i; j++) {
        if(i%j==0){
            sum +=j;
        }
    }
    if(sum == i){
        console.log(i);
    }
    
}
/*4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız. */

for (let i = 2; i < 1000; i++) {
    let sum=0;
    for (let j = 2; j < i; j++) {
        if(i%j==0 && i!=2){
            sum ++;
        }
    }
    if(sum == 0){
        console.log(i + " "+  "sayısı asal sayıdır.");
    }
    
}



