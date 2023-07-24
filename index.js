// function zero(number) {
//     const zeroNums = number.filter(num => num !== 0);
//     const nums = number.length - zeroNums.length;
  
//     return [...zeroNums, ...Array(nums).fill(0)];
//   }
//   const number = [0, 1, 0, 3, 12];
//   const result = zero(number);
//   console.log(result); 

  ///////////////////////////////////////


//    function short(inputString) {
//          const Array = inputString.split(' ');
//          return Array.reduce((shortestLength, word) => Math.min(shortestLength, word.length), Infinity);
//        }
//     const inputString = "This is a test string with different word lengths";
//        const result = short(inputString);
//       console.log(result); 

      //////////////////////////////

    //   function century(year) {
    //     return Math.ceil(year/100)
        
    //   }
    //    const year1 = 1705;
    //    const year2 = 2000;
    //    const year3 = 1900;
    //    const year4 = 1539;
    //    const year5 = 2023;

    //    console.log(century(year1))
    //    console.log(century(year2))
    //    console.log(century(year3))
    //    console.log(century(year4))
    //    console.log(century(year5))

    ////////////////////////////////////


            
//  function shoot(str) {
//      const shoot = str.match(/[aeiou]/gi);
//      return shoot ? shoot.length : 0;
//    }
//    const inputString = "this is a message hello world";
//    console.log(shoot(inputString)); 
  
//////////////////////////////////


// function firststr(inputString) {
//          const CaseString = inputString.toLowerCase();
      
//          for (const char of CaseString) {
//            if (CaseString.indexOf(char) === CaseString.lastIndexOf(char)) {
//              return char;
//            }
//          }
      
//          return null;
//        }
      
    
//        const inputString = "Stress";
//        console.log(firststr(inputString));