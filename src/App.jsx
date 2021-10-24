import { useQuery, gql } from "@apollo/client";

import Header from "./components/Header";
import StickyNav from "./components/StickyNav";
import Overview from "./components/Overview";
import ProfileSidebar from "./components/ProfileSidebar";

const PROFILE_QUERY = gql`
  {
    user(login: "a11rew") {
      id
      bio
      location
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories(last: 6) {
        totalCount
        nodes {
          id
          name
        }
      }
    }
  }
`;

const App = () => {
  const { data, error } = useQuery(PROFILE_QUERY);

  return (
    <div className="bg-canvas h-screen text-text-primary">
      <Header />
      <StickyNav />
      <div className="flex max-w-7xl m-auto gap-6 py-8">
        <ProfileSidebar />
        {data && <Overview repos={data.user.repositories} />}
      </div>
      {/* {data && <div>{String(data)}</div>}
      {error && <div>{String(error)}</div>} */}
    </div>
  );
};

export default App;
