import React from 'react'

const sizes = {
    default: `py-4 px-4`,
    lg: `py-6 px-6`,
    xl: `py-8 px-8 text-xl`,
}

const Button = ({children, size, className = ""}) => {
    return <button className={`${sizes[size] || sizes.default} bg-green-600 hover:bg-green-700 rounded text-white ${className}`}>
        {children}
    </button>
}

export default Button;