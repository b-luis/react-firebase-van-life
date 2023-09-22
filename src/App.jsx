import { Layout, HostLayout } from "./components";
import {
  Home,
  About,
  Van,
  VanDetail,
  NotFound,
  Dashboard,
  Income,
  Reviews,
  HostVans,
  HostVanDetail,
  HostVanInfo,
  HostVanPricing,
  HostVanPhotos,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import "./miragejs/server";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Van />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
