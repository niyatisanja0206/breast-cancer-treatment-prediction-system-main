import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home"
import Header from "./Header"
import Footer from "./Footer"
import Condition from "./Condition"
import Signup from "./Signup"
import Login from "./Login"
import Treatment_details from "./Treatment_details"
import Treatment_plan from "./Treatment_plan"
import Alternative_treatment from "./Alternative_treatment"
import About from "./About"
import Contact from './Contact';
import Landing from "./Landing"
import PrivacyPolicy from './Privacy Policy';
import Chatbot from "./Chatbot";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<><Landing /><Footer /></>} />
                    <Route path='/Home' element={<><Header /><Home /><Footer /></>} />
                    <Route path='/About' element={<><About /><Footer /></>} />
                    <Route path='/Contact' element={<><Contact /><Footer /></>} />
                    <Route path='/Signup' element={<><Signup /><Footer /></>} />
                    <Route path='/Login' element={<><Login /><Footer /></>} />
                    <Route path='/Condition' element={<><Header /><Condition /><Footer /></>} />
                    <Route path='/Treatment_details' element={<><Header /><Treatment_details /><Footer /></>} />
                    <Route path='/Treatment_plan' element={<><Header /><Treatment_plan /><Footer /></>} />
                    <Route path='/Alternative_treatment' element={<><Header /><Alternative_treatment /><Footer /></>} />
                    <Route path='/Privacy_Policy' element={<><PrivacyPolicy /><Footer /></>} />
                </Routes>
                <Chatbot />
            </BrowserRouter>
        </>
    );
};