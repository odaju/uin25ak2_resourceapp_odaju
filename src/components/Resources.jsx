import { Link } from "react-router-dom"
import resources from "../assets/resources.js"
import PageTitle from "./PageTitle.jsx"

/**Her har jeg tatt i bruk filter fra Arbeidskrav 1 og tilpasset slik at den passser til denne oppgaven. 
 * Medstudent Hanna Sørum har bistått med å sette opp .map og PageTitle fra linje 12 til 24. */
export default function Resources({category}){
    const filtered = resources.filter(resource => resource.category === category)
    console.log(filtered)

    return(
        <>
        <PageTitle Tittelnavn={filtered[0].category}/>
        {filtered.map((filtermap) => 
            <article id="artikkelkort" key={filtermap.title}>
                <h2 id="overskrift">{filtermap.title}</h2>
                 <ul>
                    <li>
                    <Link to={filtermap.url} id="lesmer">Les mer</Link>
                    </li>
                </ul>
            </article>
        )}
        </>
    )
}