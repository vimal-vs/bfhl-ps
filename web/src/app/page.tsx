'use client';

import { useState } from 'react';

export default function Page() {
    const [data, setData] = useState('');
    const [key, setKey] = useState('');
    const [output, setOutput] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:3000/process', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: JSON.parse(data), key }),
            });
            const result = await response.json();
            setOutput(JSON.stringify(result, null, 2));
        } catch (error) {
            setOutput(`Error: ${error}`);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>JSON Processor</h1>
            <div>
                <textarea
                    rows={5}
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    placeholder="Enter JSON data"
                />
            </div>
            <div>
                <textarea
                    rows={1}
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    placeholder="Enter key"
                />
            </div>
            <div>
                <textarea
                    rows={5}
                    value={output}
                    readOnly
                    placeholder="API response"
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
