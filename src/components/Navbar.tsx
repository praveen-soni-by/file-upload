import Icon from "./svg/Icon";


interface NavProps {
  templates: Object
  downloadTemplate: (fileName: string) => void
}

export default function Navbar({ templates, downloadTemplate }: NavProps) {
  return (
    <nav className="flex items-center text-white  justify-center p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Icon.Logo />
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ml-4">

        <div className="dropdown-container inline-block">
          <button
            className="outline-none focus:outline-none  px-3 py-1  rounded-sm flex items-center min-w-32"
          >
            <div className="cursor-pointer text-xl font-medium">Templates</div>
            <span className="ml-2">
              <Icon.DownArrow />
            </span>
          </button>
          <ul
            className="item-container min-w-32 z-40"
          >
            {Object.entries(templates)?.map(([key, value]) => (
              <li key={key} className="text-black">
                <a onClick={() => downloadTemplate(key)}
                  className="dropdown-item " href="#">{value}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

