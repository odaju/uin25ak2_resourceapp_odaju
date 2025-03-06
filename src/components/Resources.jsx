import resources from "../assets/resources.js"

export default function Resources({category}){
    const filtered = resources.filter(resource => resource.category === category)
    console.log(filtered)
    return(
        <h1>hei</h1>
    )
}