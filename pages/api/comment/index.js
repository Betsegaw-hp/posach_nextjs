export default async function handler(req, res) {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await response.json()

    try {
        if(JSON.stringify(data) !== '{}' ) {
            res.status(200).json(data)
        } else {
            console.log({'message': `the requsted id ${id} is not found. 404`})
            res.status(404).json({'message': `the requsted id ${id} is not found. 404`})
        }
    } catch (error) {
       console.log(error)
        // res.status(error.code).json({'message': `Error found: ${error} `})
    }
}