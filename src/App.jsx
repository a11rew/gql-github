import Header from "./components/Header";
import StickyNav from "./components/StickyNav";
import Overview from "./components/Overview";
import ProfileSidebar from "./components/ProfileSidebar";

const App = () => {
  return (
    <div className="bg-canvas h-screen text-text-primary">
      <Header />
      <StickyNav />
      <div className="flex max-w-7xl m-auto gap-6 py-8">
        <ProfileSidebar />
        <Overview />
      </div>
    </div>
  );
};

export default App;
