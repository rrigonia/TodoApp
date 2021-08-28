import React from 'react';
import useToggle from './hooks/useToggle';

export default function Emojis() {
    const [Banana, setBanana] = useToggle(false)
    const [isHappy, setIsHappy] = useToggle(true)
    return (
        <div>
            <h1 onClick={setBanana}>{Banana ? "🍌" : "🌶"}</h1>
            <h1 onClick={setIsHappy}>{isHappy ? "😁" : "😥"}</h1>
        </div>
    )
}
