import {Container} from "@chakra-ui/react"
import {Route,Routes} from "react-router-dom"
//import PrivateRoute from "./Components/PrivateRoute"
import Courses from "./Courses"
import ForIndividual from "./ForIndividual"
import PluralSight from "./PluralSight"
import Signin from "./Signin"
import Skills from "./Skills"
import CreateLogin from "./CreateLogin"


function AllRoutes(){
    return(
        <>
            <Routes>
                <Route  path="/"  element={<ForIndividual/>}></Route>
                <Route  path="/skills"  element={<Skills/>}></Route>
                <Route  path="/courses"  element={<Courses/>}></Route>
                <Route  path="/signin"  element={<Signin/>}></Route>
                <Route  path="/signup"  element={<CreateLogin />}></Route>
                <Route  path="/pluralsight"  element={<PluralSight/>}></Route>
                {/* <Route path="/createLogin"  element={<CreateLogin/>}></Route> */}
            </Routes>
        </>
    )
}

export default AllRoutes