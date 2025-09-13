export const filtersData = [
  {
    type: "list",
    title: "Related Categories",
    items: [
      "Categories",
      "Tablet & Laptops Accessories",
      "Laptop Bags & Cases",
      "Tablet Stylus Pens",
    ],
    isOpen: true,
  },
  {
    type: "range",
    title: "Price",
    min: 0,
    max: 5000,
    defaultMin: 500,
    defaultMax: 3500,
    isOpen: true,
  },
  {
    type: "text",
    title: "Refine By",
    items: [
      { value: "Android 6.0" },
      { value: "iOS 16" },
      { value: "Windows 11" },
    ],
    isOpen: true,
  },

  {
    type: "list",
    title: "Operating System",
    items: ["Android 14", "Android 13", "Android 12", "Android 10"],
    isOpen: true,
  },
  {
    type: "list",
    title: "Screen Size",
    items: [
      "2560x1440",
      "1920x1200",
      "1920x1080",
      "1366x768",
      "1280x800",
      "1024x768",
      "800x600",
    ],
    isOpen: false,
  },
  {
    type: "list",
    title: "Processor Core",
    items: ["Dual Core", "Quad Core", "Hexa Core", "Octa Core", "Deca Core"],
    isOpen: false,
  },
  {
    type: "list",
    title: "Tablet Data Capacity",
    items: ["16 GB", "32 GB", "64 GB", "128 GB", "256 GB", "512 GB", "1 TB"],
    isOpen: false,
  },
];
