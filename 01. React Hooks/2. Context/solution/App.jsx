import UpdateUser from './components/UpdateUser';
import UserProfile from './components/UserProfile';
import { UserProvider } from './UserContext';

const App = () => {
        return (
                <UserProvider>
                        <UserProfile />
                        <UpdateUser/>
                </UserProvider>

        );
}
export default App;
                        