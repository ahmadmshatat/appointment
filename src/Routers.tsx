import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import Appointment from "./pages/appointment";

export default function AppRouters() {
    return (
        <Routers>
                <Routes>
                    <Route path="/" element={<Appointment />} />
                </Routes>
        </Routers>
    );
}