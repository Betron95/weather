import Dropdown from 'react-dropdown';

import 'react-dropdown/style.css';

export default function DropDown({options, value, onChange}) {
  return (
    <Dropdown className="dropdown" options={options} onChange={onChange} value={value} placeholder="Select an option" />
  );
};
