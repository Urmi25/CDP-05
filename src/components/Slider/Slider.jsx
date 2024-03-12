import React, { useEffect, useState } from 'react';
import './Slider.css';

const Slider = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((resp) => resp.json())
            .then((apiData) => {
                setData(apiData);
                setLoading(false);
              
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="card-container">
            {data.map((item) => (
                <div key={item.id} className="card">
                    <h2>{item.title}</h2>
                    <p>{item.completed ? "Completed" : "Not Completed"}</p>
                </div>
            ))}
        </div>
    );
};


export default Slider;

