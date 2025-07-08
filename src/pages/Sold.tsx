import { Navbar } from "../components/NavBar/Navbar"
import { Items } from "../components/Items/Items"
import "../styles/base.css"

export function SoldPage() {

    return (
        <>
            <Navbar activePage="sold"/>
            <div id="content">
                <Items />
            </div>
        </>
    )
}