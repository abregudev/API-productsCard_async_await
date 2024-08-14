
async function request() {
    const response = await fetch('./assets/js/db.json')
    const data = await response.json()
    return data
}

request()