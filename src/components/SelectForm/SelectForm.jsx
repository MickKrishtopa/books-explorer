import "./SelectForm.css";
import { useState } from "react";

export default function SelectForm({ title, options }) {
    return (
        <label className='select-form'>
            {title}
            <select className='select-form__select-area'>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {" "}
                        {option}
                    </option>
                ))}
            </select>
        </label>
    );
}

// export default function Dropdown({ options, selected, setSelected }) {
//     const [isActiveSelect, setActiveSelect] = useState(false);

//     return (
//         <div className='Dropdown'>
//             <div
//                 className='DropdownButton'
//                 onClick={(event) => setActiveSelect(!isActiveSelect)}>
//                 <p>{selected}</p>
//                 <span></span>
//             </div>
//             {isActiveSelect && (
//                 <div className='DropdownContent'>
//                     {options.map((option) => {
//                         return (
//                             <div
//                                 key={option}
//                                 className='DropdownItem'
//                                 onClick={(event) => {
//                                     setSelected(option);
//                                     setActiveSelect(false);
//                                 }}>
//                                 {option}
//                             </div>
//                         );
//                     })}
//                 </div>
//             )}
//         </div>
//     );
// }
