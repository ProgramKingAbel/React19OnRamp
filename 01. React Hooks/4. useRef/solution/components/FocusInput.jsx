import { useRef } from 'react';

const FocusInput = () => {

        const inputRef = useRef(null);

        const handleClick = () => {
                inputRef.current.focus();
                inputRef.current.value = "This field is now Focused on"
        }
        return (
                <div>
                        <input type="text" ref={inputRef} />
                        <button onClick={handleClick}>Focus the input</button>
                </div>
        );
}

export default FocusInput;
