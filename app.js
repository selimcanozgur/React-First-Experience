import axios from "axios";
async function getData (userId) {
    const {data: users} = await axios (`https://jsonplaceholder.typicode.com/users/${userId}`)
    const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?id=${userId}`)
    console.log("users:",users,"posts:",posts);
}
export default getData  