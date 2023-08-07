import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import SelectPlan from "./pages/SelectPlan";
import AddOns from "./pages/AddOns";
import Summary from "./pages/Summary";
import Sidebar from "./components/Sidebar";
import { PlansProvider } from "./context/PlansContext";
import { AddOnsProvider } from "./context/AddOnsContext";
import Final from "./pages/Final";

const App = () => {
  return (
    <PlansProvider>
      <AddOnsProvider>
        <BrowserRouter>
          <div className="bg-white sm:w-[60rem] h-[35rem] mt-[100px] sm:mt-0 rounded-xl shadow-xl p-4 flex flex-col sm:flex sm:flex-row justify-between">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/selectplan" element={<SelectPlan />} />
              <Route path="/addons" element={<AddOns />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="/final" element={<Final />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AddOnsProvider>
    </PlansProvider>
  );
};

export default App;
