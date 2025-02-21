import { useContext } from 'react';
import { UserContext } from './UserContext';

const UpdateUser = () => {
        const { user, setUser } = useContext(UserContext);

        const handleChange= (e) => {
                const newUser = {...user, [e.target.name]: e.target.value }
                setUser(newUser);
        }

        return (
                <div>
                        <label> Enter New Name:
                        <input type="text" value={user.name} onChange={handleChange} name= "name"/>
                        </label>

                        <label>Enter New Age
                        <input type="text" value={user.age} onChange={handleChange} name= "age"/>
                        </label>

                </div>
        );
}

export default UpdateUser;