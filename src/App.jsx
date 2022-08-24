import { useState } from "react";
import { Provider } from "react-redux";
import BlogContainer from "./Components/Blog/BlogContainer";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import { store } from "./redux/store";

function App() {
    const [count, setCount] = useState(0);

    return (
        <Provider store={store}>
            <Navbar />
            <Search />
            <BlogContainer />
            <Footer />
        </Provider>
    );
}

export default App;
