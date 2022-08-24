import { useState } from "react";
import BlogContainer from "./Components/BlogContainer";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar />
            <Search />
            <BlogContainer />
            <Footer />
        </>
    );
}

export default App;
