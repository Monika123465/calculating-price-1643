import {Container} from "@chakra-ui/react"
import {Route,Routes} from "react-router-dom"
//import PrivateRoute from "./Components/PrivateRoute"
import Courses from "./Courses"
import ForIndividual from "./ForIndividual"
import PluralSight from "./PluralSight"
import Signin from "./Signin"
import Skills from "./Skills"


function AllRoutes(){
    return(
        <Container>
            <Routes>
                <Route  path="/"  element={<ForIndividual/>}></Route>
                <Route  path="/skills"  element={<Skills/>}></Route>
                <Route  path="/Courses"  element={<Courses/>}></Route>
                <Route  path="/signin"  element={<Signin/>}></Route>
                <Route  path="/pluralsight"  element={<PluralSight/>}></Route>
            </Routes>
        </Container>
    )
}

export default AllRoutes