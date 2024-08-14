
async function request() {
    const response = await fetch('../assets/js/db.json')
    const data = await response.json()
    console.log(data);
}
console.log(request())

// const request = async () => {
//         const response = await fetch("../assets/js/db.json");
//         const data = await response.json();
//         console.log(data);
    
//         console.log("Código síncrono.");
//     }
    
// request()