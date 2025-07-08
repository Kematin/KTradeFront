import { Navbar } from "../components/NavBar/Navbar"
import { Items } from "../components/Items/Items"
import "../styles/base.css"

export function OnSalePage() {

    return (
        <>
            <Navbar activePage="onSale"/>
            <div id="content">
                <Items activePage="onSale"/>
            </div>
        </>
    )
}