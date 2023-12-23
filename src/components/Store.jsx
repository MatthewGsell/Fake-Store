import { Link, Outlet } from "react-router-dom"


function Store() {
    return (
        <>
        <div><Link to="hats">1</Link><Link to="shirts">2</Link><Link to="shoes">3</Link></div>
        <div><Outlet></Outlet></div>
        </>
    )
}

export default Store 