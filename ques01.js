const userDetails = [ { uId: 1, uName: "avijit", uAge: 34, uSal: 67000},
                      { uId: 2, uName: "saikat", uAge: 27, uSal: 55000 },
                      { uId: 3, uName: "baidyanath", uAge: 25, uSal: 17000},
                      { uId: 4, uName: "mrinal", uAge: 29, uSal: 33000},
                      { uId: 5, uName: "sukdev", uAge: 33, uSal: 80000}
                    ];

// get all user details who have age gretter than 27
let userList = [];
for ( i = 0; i < userDetails.length; i++){
    if (userDetails[i].uAge > 27) {
        userList.push(userDetails[i])
    }
}
console.log(userList);