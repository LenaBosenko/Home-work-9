
 // home work 9 task 1


 for (let i = 20; i <= 30; i = i + 0.5) {
   console.log(i);

 } 

 // home work 9 task 2

  let num = 0
  let dollars
      while (num < 100) {
        num += 10
        dollars = num * 27
        console.log(`${num} $ по курсу ${dollars} грн.`);
        }

      

  // home work 9 task 3

  let askNumber = prompt('Enter the number', 100)

        let startNum = 1
        let string = ''
        while (startNum <= 100) {
            if (askNumber > startNum ** 2) {
                string = string + startNum + '  '
            } 
            
            
            
            startNum++
        }
        alert(`Numbers whose square is less than the number ${askNumber}: ${string}`)



  // home work 9 task 4

      let primeNum = prompt('Enter the number')
        out:
        for (let i = 2; i < primeNum; i++) {
            for (let j = 2; j < i; j++) {
                if (i % j == 0) continue out
            }
            console.log(i);
        }



  // home work 9 task 4
    

        let num = prompt("Enter any number")

        let i = 1
        for (; i < num;) {
            i++
            if (3 ** i == num) {
                alert(`This number is number 3 in ${i} power` );

            } 
        }
