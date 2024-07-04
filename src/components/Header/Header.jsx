import { useState } from 'react';

function Header() {
  const [visible, setVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <nav className='h-14'>
      <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-8 fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-lg rounded-b-[30px]">
        <div className="flex justify-between items-center h-full ml-20">
          <a href="#home" className="text-lg font-bold mt-1">SPEFIX LOGO</a> {/* logo portion */}
          <div className="lg:hidden relative mt-3">
            <button
              onClick={toggleVisibility}
              className="text-gray-700"
              aria-controls="navbar-content"
              aria-expanded={visible}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className={`${visible ? 'block' : 'hidden'} lg:hidden hover:text-slate-50 bg-white shadow-lg rounded-lg absolute right-0 top-full max-w-[calc(50vw-2rem)] overflow-x-auto`}>
              <ul className="py-2 font-bold">
                <NavItem href="#" label="Home" />
                <NavItem href="#" label="Solutions" />
                <NavItem href="#" label="Pricing" />
                <DropdownItem
                  label="About Us"
                  items={[
                    { label: 'About Us', href: '#' },
                    { label: 'News', href: '#' },
                    { label: 'FAQ', href: '#' },
                    { label: 'Support', href: '#' },
                    { label: 'Reviews', href: '#' },
                    { label: 'Partners', href: '#' },
                  ]}
                  dropdownVisible={dropdownVisible}
                  setDropdownVisible={setDropdownVisible}
                  isMobile={true}
                />
              </ul>
            </div>
          </div>
          <div className="hover:text-slate-50 hidden lg:flex lg:space-x-4 lg:mt-4">
            <NavItem href="#" label="Home" />
            <NavItem href="#" label="Solutions" />
            <NavItem href="#" label="Pricing" />
            <DropdownItem
              label="About Us"
              items={[
                { label: 'About Us', href: '#' },
                { label: 'News', href: '#' },
                { label: 'FAQ', href: '#' },
                { label: 'Support', href: '#' },
                { label: 'Reviews', href: '#' },
                { label: 'Partners', href: '#' },
              ]}
              dropdownVisible={dropdownVisible}
              setDropdownVisible={setDropdownVisible}
              isMobile={false}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ href, label }) {
  return (
    <li className="list-none">
      <a href={href} className="hover:text-slate-50 block px-4 py-2 text-slate-900 hover:bg-blue-900  rounded">
        {label}
      </a>
    </li>
  );
}

function DropdownItem({ label, items, dropdownVisible, setDropdownVisible, isMobile }) {
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <li className="relative group list-none"
      onMouseEnter={() => !isMobile && setDropdownVisible(true)}
      onMouseLeave={() => !isMobile && setDropdownVisible(false)}
    >
      <button
        className=" block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-900 hover:text-slate-50 rounded"
        onClick={isMobile ? toggleDropdown : undefined}
      >
        {label}
      </button>

      <div className={`${dropdownVisible ? 'block' : 'hidden'} bg-white shadow-lg rounded-lg absolute w-48`}>
        {items.map((item, index) => (
          <a key={index} href={item.href} className="hover:text-slate-50 block px-4 py-2 text-gray-700 hover:bg-blue-900 rounded">
            {item.label}
          </a>
        ))}
      </div>
    </li>
  );
}

export default Header;
