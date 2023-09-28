import { Layout, HostLayout, AuthRequired } from "./components";
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
  VanError,
  Login,
  SignUp,
} from "./pages";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./miragejs/server";
import { loader as vansLoader } from "./pages/Vans/Van";

const router = createBrowserRouter(
  createRoutesFromElements(
    /* errorElement will catch any error in the components. */
    <Route path="/" element={<Layout />} errorElement={<VanError />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="vans" element={<Van />} loader={vansLoader} />
      <Route path="vans/:id" element={<VanDetail />} />
      <Route element={<AuthRequired />}>
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
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
