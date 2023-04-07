import { Routes, Route } from "@solidjs/router"
import { lazy } from "solid-js";

import Header from "./components/Header"
import Footer from "./components/Footer"
import Layout from "./components/Layout";

const Quests = lazy(() => import("./pages/Quests"))
const Home = lazy(() => import("./pages/Home"))

export default function App() {
  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/quests" component={Quests} />
        </Routes>
      </Layout>
      <Footer />
    </>
  );
}