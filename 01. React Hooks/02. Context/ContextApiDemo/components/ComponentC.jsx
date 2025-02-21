import { Data, Data1 } from '../App';

const ComponentC = () => {
        return (
                <>
                        <Data.Consumer>
                                {
                                        (name) => {
                                                return (
                                                        <div>
                                                                <Data1.Consumer>
                                                                        {
                                                                                (age) => {
                                                                                        return (
                                                                                                <h1>Candidate Name: {name} Age: {age}</h1>
                                                                                        );
                                                                                }
                                                                        }
                                                                </Data1.Consumer>
                                                        </div>
                                                )
                                        }
                                }
                        </Data.Consumer>
                </>
        );
}

export default ComponentC;
