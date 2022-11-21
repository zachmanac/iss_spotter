const { fetchCoordsByIP, fetchMyIP, fetchISSFlyOverTimes } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });
// temp code to make sure function works as intended.

// fetchCoordsByIP('172.103.209.59', (error, coordinates) => {
//     if (error) {
//       console.log("It didn't work!" , error);
//       return;
//     }
  
//     console.log('It worked! Returned latitude and longitude' , coordinates);
// });

// fetchISSFlyOverTimes({ latitude: 49.27670, longitude: -123.13000 }, (error, passTimes) => {
//       if (error) {
//         console.log("It didn't work!" , error);
//         return;
//       }
    
//       console.log('It worked! Returned flyover times' , passTimes);
//   });

