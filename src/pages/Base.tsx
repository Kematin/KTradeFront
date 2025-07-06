import { Navbar } from "../components/NavBar/Navbar"
import { Items } from "../components/Items/Items"
import "../styles/base.css"

export function BasePage() {

    return (
        <>
            <Navbar activePage="inventory"/>
            <div id="content">
                <Items />
            </div>
        </>
    )
}