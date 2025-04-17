import { useState } from "react";
import { useRouter } from "next/router";

interface DropdownOption {
  label: string;
  path: string;
}

interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  const handleSelect = (option: DropdownOption) => {
    setSelected(option.label);
    setIsOpen(false);
    router.push(option.path);
  };

  return (
    <div className="relative inline-block">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer px-3 py-2 bg-gray-200 rounded"
      >
        {selected || placeholder}
      </div>

      {isOpen && (
        <ul className="absolute left-0 mt-[100px] bg-white  z-50 w-40">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
