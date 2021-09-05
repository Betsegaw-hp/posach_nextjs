export default async function handler(req, res) {
    const { query : { id }} = req
    const response = await fetch(`http://jsonplaceholder.typicode.com/comments/${id}`)
    const data = await response.json()

    try {
        if(JSON.stringify(data) !== '{}' ) {
            res.status(200).json(data)
        } else 
            res.status(404).json({'message': `the requsted id ${id} is not found. 404`})
    } catch (error) {
       console.log(error)
        // res.status(error.code).json({'message': `Error found: ${error} `})
    }
}