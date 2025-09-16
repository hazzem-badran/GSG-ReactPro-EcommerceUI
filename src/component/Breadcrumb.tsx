
export default function Breadcrumb() {
  return (
    <nav className="text-sm mt-5 text-gray-600">
      <ol className="flex space-x-0">
        <li>
          {/* <Link href="/">Home</Link> */}
          <span className="">Home/</span>
        </li>
        <li>
          {/* <Link href="/categories">Categories</Link> */}
          <span className="">Categories/</span>
        </li>
        <li className="font-medium">
          Tablet & Laptops Accessories
        </li>
      </ol>
    </nav>
  );
}
