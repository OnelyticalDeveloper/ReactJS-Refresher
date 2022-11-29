import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetUps from "./pages/AllMeetUps";
import Favorites from "./pages/Favorites";
import NewMeetUp from "./pages/NewMeetUp";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<AllMeetUps />} />
        <Route path="/new-meetup" element={<NewMeetUp />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

export default App;
