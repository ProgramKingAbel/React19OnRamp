import useToggle from '../hooks/useToggle';

const ToggleComponent = () => {

        const [isToggled, toggle ] = useToggle();

        return (
                <div>
                        <button onClick={toggle}>{isToggled ? "Hide": "Show"} Message</button>
                        {isToggled && <p>Toggled Message is now visible</p>}
                        {!isToggled && <p>Click Show to see the message</p>}

                </div>
        );

}

export default ToggleComponent;
