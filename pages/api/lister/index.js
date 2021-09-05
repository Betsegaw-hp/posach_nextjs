export default async function handler(req, res) {
    const response = await fetch('http://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    res.status(200).json(data)
} 