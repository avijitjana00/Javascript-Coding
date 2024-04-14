const userDetails = [ { uId: 1, uName: "avijit", uAge: 34, uSal: 67000},
                      { uId: 2, uName: "saikat", uAge: 27, uSal: 55000 },
                      { uId: 3, uName: "baidyanath", uAge: 25, uSal: 17000},
                      { uId: 4, uName: "mrinal", uAge: 29, uSal: 33000},
                      { uId: 5, uName: "sukdev", uAge: 33, uSal: 80000}
                    ];

// get average salary of all user
let totalSal = 0;
for ( i = 0; i < userDetails.length; i++){
    totalSal += userDetails[i].uSal
}
console.log("total salary : ", totalSal);
const avrSal = totalSal/userDetails.length
console.log("average salary : ", avrSal);