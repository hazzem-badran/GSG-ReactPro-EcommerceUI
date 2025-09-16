import { KEYWORDS } from './constents/keywords'

const Keywords = () => {
  return (
    <aside className="w-full rounded-lg p-4 pb-0 mt-6 md:w-1/4 md:p-8 md:mt-0">
      <h2 className="text-lg text-gray-700 font-semibold mb-4 text-center md:text-left">
        Most Search Keywords
      </h2>
      <div className="space-y-4 text-center md:text-left">
        {KEYWORDS.map((section) => (
          <div key={section.title}>
            <h4 className="font-medium text-gray-500 mb-2 w-full">{section.title}:</h4>
            <ul className="flex flex-wrap gap-2 justify-center md:justify-start lg:flex-nowrap">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="text-gray-600 px-2 py-1 rounded text-xs whitespace-nowrap"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default Keywords
