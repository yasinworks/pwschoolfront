import './App.css';
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Header from "./components/Header/Header";
import AppRoutes from "./routes/AppRoutes";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getClasses} from "./store/operations";

function App() {
   const dispatch = useDispatch();

   useEffect( () => {
       dispatch(getClasses());
   }, [dispatch])

    return (
        <div className="App">
            <ErrorMessage/>
            <Header/>
            <AppRoutes/>

        </div>
    );
}

export default App;
