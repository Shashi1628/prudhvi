// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React from "react";
// import Login from "./Login";
// import Signup from "./Signup";
// import Admindashboard from "./Admindashboard.js"
// import Salesdashboard from "./Salesdashboard.js"
// import Array1 from "./Array1";
// import Model from "./Model.js";
// import Verticalbar from "./Verticalbar.js"
// import Horizontalbar from "./Horizontalbar.js"
// import Doughnut from "./Doughnut.js"
// import Progressbar from "./Progressbar.js"
// import Profile1 from "./Profile1.js"
// import Profile from "./Profile.js"


// export default function Navigation() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Login/>}></Route>
//           <Route path="/signup" element={<Signup />}></Route>
//           <Route path="/Admindashboard" element={<Admindashboard/>}></Route>
//           <Route path="/Salesdashboard" element={<Salesdashboard/>}></Route>
//           <Route path="/Array1" element={<Array1 />}></Route>
//           <Route path="/Model" element={<Model />}></Route>
//           <Route path="/Verticalbar" element={<Verticalbar/>}></Route>
//           <Route path="/Horizontalbar" element={<Horizontalbar/>}></Route>
//           <Route path="/Doughnut" element={<Doughnut/>}></Route>
//           <Route path="/Progressbar" element={<Progressbar/>}></Route>
//           <Route path="/Profile1" element={<Profile1/>}></Route>
//           <Route path="/Profile" element={<Profile/>}></Route>
        
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Array1/>}></Route>
//           <Route path="/Array1" element={<Array1 />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </>

// }
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Login from "./Login";
// import Signup from "./Signup";
// import Admindashboard from "./Admindashboard.js"
// import Salesdashboard from "./Salesdashboard.js"
// import Array1 from "./Array1";
// import Model from "./Model.js";
// import Verticalbar from "./Verticalbar.js"
// import Horizontalbar from "./Horizontalbar.js"
import Doughnut from "./Doughnut.js"
// import Progressbar from "./Progressbar.js"
// import Profile1 from "./Profile1.js"
// import Profile from "./Profile.js"
import ProspectListpage from "./ProspectListpage.js"
// import Filterbar from "./components/Filterbar";



export default function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>

          <Route path="/ProspectListpage" element={<ProspectListpage/>}></Route>
          <Route path="/Doughnut" element={<Doughnut/>}></Route>
          
          
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Array1/>}></Route>
//           <Route path="/Array1" element={<Array1 />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </>

// }
          {/* <Route path="/signup" element={<Signup />}></Route>
          <Route path="/Admindashboard" element={<Admindashboard/>}></Route>
          <Route path="/Salesdashboard" element={<Salesdashboard/>}></Route>
          <Route path="/Array1" element={<Array1 />}></Route>
          <Route path="/Model" element={<Model />}></Route>
          <Route path="/Verticalbar" element={<Verticalbar/>}></Route>
          <Route path="/Horizontalbar" element={<Horizontalbar/>}></Route>
          <Route path="/Doughnut" element={<Doughnut/>}></Route>
          <Route path="/Progressbar" element={<Progressbar/>}></Route>
          <Route path="/Profile1" element={<Profile1/>}></Route>
          <Route path="/Profile" element={<Profile/>}></Route> */}
               {/* <Route path="/Filterbar" element={<Filterbar/>}></Route> */}