export default async function handler(req, res) {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await response.json()

    res.status(200).json(data)
}