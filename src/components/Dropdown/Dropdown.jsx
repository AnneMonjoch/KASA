import { useState } from "react";
import chevron from "../../assets/images/chevron.svg"

function Dropdown({title, content}) {
  const [ isOpen, setIsOpen ] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="dropdownWrapper">
      <div className="dropdownTitleWrapper" onClick={ toggle }>
        <h2 className="dropdownTitle">{ title }</h2>
        {
          isOpen ? <img className="chevronUp chevron" src={ chevron } alt="chevron" /> : <img className="chevronDown chevron" src={ chevron } alt="chevron" />
        }
      </div>
      { isOpen && <div className={ isOpen ? "dropdownContent" : ""}>{ content }</div>}
    </div>
  )
}

export default Dropdown;