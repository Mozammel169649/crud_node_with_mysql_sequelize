
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Edit from "./components/Edit";
import Create from "./components/Create";
import View from "./components/View";
import { createContext, useState } from "react";

export const CategoryContext = createContext();

function App() {

  const [data, setData] = useState([
    {
      name: "Naim Uddin",
      roll: 45,
      subject: "Math"
    },
    {
      name: "Mozammel",
      roll: 15,
      subject: "physics"
    }
  ])

  return (
    <CategoryContext.Provider value={[data , setData]}>
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:roll" element={<Edit />} />
          <Route path="/view/:roll" element={<View />} />
        </Routes>
      </BrowserRouter>
    </CategoryContext.Provider>
  );
}

export default App;
