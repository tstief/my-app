import { createSignal } from 'solid-js';

const MyComponent = () => {
    const [message, setMessage] = createSignal('');

    const fetchData = async () => {
        const response = await fetch('http://localhost:5000/api/hello');
        const data = await response.json();
        setMessage(data.message);
    };

    fetchData();

    return (
        <div>
            <h1>{message()}</h1>
        </div>
    );
};

export default MyComponent;