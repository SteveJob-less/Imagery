import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import HomePage from "./components/pages/Home/HomePage";
import PreviewPage from "./components/pages/PreviewPage/PreviewPage";

const App = () => {    

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/:query?" element={<HomePage />} />
                <Route path="/view/:username/:imgId?" element={<PreviewPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
