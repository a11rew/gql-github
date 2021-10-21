import {
  MarkGithubIcon,
  BellIcon,
  PlusIcon,
  TriangleDownIcon,
} from "@primer/octicons-react";

const Header = () => {
  return (
    <header
      role="banner"
      className="flex items-center justify-between bg-header py-4 px-6 text-sm"
    >
      <div className="flex items-center">
        <div className="-my-1 mr-4">
          <a href="/">
            <MarkGithubIcon size="medium" aria-label="Github logo" />
          </a>
        </div>
        <div className="flex items-center bg-canvas mr-4 w-[272px] border border-search-border rounded-md focus-within:border-search-accent">
          <input
            className="bg-transparent px-3 min-h-[28px] leading-5 w-full focus:outline-none"
            placeholder="Search or jump to"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            aria-hidden="true"
            className="mr-1"
          >
            <path
              fill="none"
              stroke="#979A9C"
              opacity=".4"
              d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"
            ></path>
            <path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path>
          </svg>
        </div>
        <nav className="font-semibold space-x-4">
          <a href="/" className="hover:opacity-70 focus:opacity-70">
            Pulls
          </a>
          <a href="/" className="hover:opacity-70 focus:opacity-70">
            Issues
          </a>
          <a href="/" className="hover:opacity-70 focus:opacity-70">
            Marketplace
          </a>
          <a href="/" className="hover:opacity-70 focus:opacity-70">
            Explore
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <button>
          <BellIcon />
        </button>
        <button>
          <PlusIcon />
          <TriangleDownIcon />
        </button>
        <button className="flex items-center">
          <img
            className="w-5 h-5 rounded-full"
            src="https://avatars.githubusercontent.com/u/87580113?s=40&v=4"
          />
          <TriangleDownIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
