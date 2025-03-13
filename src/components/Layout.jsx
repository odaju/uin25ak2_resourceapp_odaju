import Nav from "./Nav";
//Laget en container fra linje 5 til 13 som holder på rammen til prosjektet. Og sikret rett nesting via children prop. 
export default function Layout ({children}){
    return (
     <div id="container">
        <Nav/>
        <main>
            {children}
        </main>
        <footer>
            ResourceArchive
        </footer>
     </div>
    )
}