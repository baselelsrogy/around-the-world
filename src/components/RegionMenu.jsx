import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function RegionMenu() {
  return (
    <Select
      options={options}
      className={{
        Input: () => "dark:text-gray-100",
        SingleValue: () => "dark:text-gray-100",
        control: () =>
          "flex h-12 items-center justify-between rounded-md border-none! pr-2 pl-4 shadow",
        indicatorSeparetor: () => "hidden",
        option: () => "hover:text-gray-800!",
        menu: () => "bg-gray-100 dark:bg-gray-800 dark:text-gray-100",
      }}
    />
  );
}
