import React from 'react';

interface NavBarProps {
    value: string,
    onChange: (newValue: string) => void
}

export default function Navbar({ value, onChange }: NavBarProps) {
    return (
        <header className="h-auto w-screen items-center flex flex-col">
            <nav>
                <ul className="py-10 px-64 flex gap-40 justify-between">
                    <li>Home</li>
                    <li>Register</li>
                    <li>Login</li>
                </ul>
            </nav>

            <input 
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder='Buscar productos'
            className='border border-black w-96 px-5 py-2 rounded-lg'
            />
        </header>
    )
}