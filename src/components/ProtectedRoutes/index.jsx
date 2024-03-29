import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { UserContext } from "../../provides/UserContext"


export const ProtectedRoutes = () => {
    const navigate = useNavigate()

    const { user } = useContext(UserContext)

    useEffect(() => {
        if(!user){
            navigate("/")
        }
    }, [user])

    return(
    <>
        { user ? <Outlet /> : <span>Carregando...</span> }
    </>
    )
}