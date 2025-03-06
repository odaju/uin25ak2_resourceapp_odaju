import { Link } from "react-router-dom"
import resources from "../assets/resources.js"
import PageTitle from "./PageTitle.jsx"

export default function Resources({category}){
    const filtered = resources.filter(resource => resource.category === category)
    console.log(filtered)

    return(
        <>
        <PageTitle Tittelnavn={filtered[0].category}/>
        {filtered.map((filtermap) => 
            <article key={filtermap.id}>
                <h2 id="overskrift">{filtermap.title}</h2>
                 <ul>
                    <li>
                    <Link to={filtermap.url}>Les mer</Link>
                    </li>
                </ul>
            </article>
        )}
        </>
    )
}