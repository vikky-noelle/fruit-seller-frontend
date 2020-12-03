import React, { useState } from 'react';
import PrimaryInput from '../../components/inputs/PrimaryInput'

const LoginForm: React.FC = () => {
    const [name, setName] = useState<string>(() => "")
    const [password, setPassword] = useState<string>(() => "")

    return (
        <div className="flex flex-col justify-center">
            <PrimaryInput
                className="my-4 p-1"
                type="text"
                value={name}
                onKeyPress={e => setName(e.target.value)}
                onChange={e => setName(e.target.value)}
                placeholder="Enter username" />

            <PrimaryInput
                className="my-4 p-1"
                type="password"
                value={password}
                onKeyPress={e => setPassword(e.target.value)}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter password" />
        </div>
    );
}

export default LoginForm;