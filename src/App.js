import React,{useState} from "react";
import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [isCartShown, setIsCartShown] = useState(false)

  const showCartHandler = () => {
    setIsCartShown(true)
  }
  const hideCartHandler = () => {
    setIsCartShown(false)
  }
  return (
    <Fragment>
     <Header onClick={showCartHandler}/>
     {isCartShown && <Cart hideCart={hideCartHandler}/>}
     <main>
      <Meals />
     </main>
    </Fragment>
  );
}

export default App;
