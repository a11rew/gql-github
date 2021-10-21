import {
  BookIcon,
  RepoIcon,
  ProjectIcon,
  PackageIcon,
} from "@primer/octicons-react";

const NavLink = ({ name, icon, active }) => {
  return (
    <button
      className={`flex gap-2 items-center text-text-primary leading-[30px] py-2 px-4 ${
        active && "border-b border-nav-selected"
      } hover:border-b hover:border-nav-unselected`}
    >
      <span className={`${!active && "text-border-muted"}`}>{icon}</span>
      <p className={`${active && "font-semibold text-whites"}`}>{name}</p>
    </button>
  );
};

const StickyNav = () => {
  return (
    <div className="mt-6 border-b border-border-muted">
      <div className="flex max-w-7xl gap-6 m-auto">
        {/** Sidebar */}
        <div className="w-80"></div>
        <div className="flex">
          <NavLink active name={"Overview"} icon={<BookIcon />} />
          <NavLink name={"Repositories"} icon={<RepoIcon />} />
          <NavLink name={"Projects"} icon={<ProjectIcon />} />
          <NavLink name={"Packages"} icon={<PackageIcon />} />
        </div>
      </div>
    </div>
  );
};

export default StickyNav;
