import { Navbar } from "../components/NavBar/Navbar"
import { Items } from "../components/Items/Items"
import "../styles/base.css"

export function InventoryPage() {

    return (
        <>
            <Navbar activePage="inventory"/>
            <div id="content">
                <Items activePage="inventory"/>
            </div>
        </>
    )
}