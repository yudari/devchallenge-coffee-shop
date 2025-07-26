import { jsx as _jsx } from "react/jsx-runtime";
const Button = ({ children, variant = 'primary', onClick, disabled = false, className = '' }) => {
    const baseClasses = 'px-6 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring focus:ring-offset-2';
    const variantClasses = {
        primary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
        outline: 'border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500',
    };
    const disabledClass = 'opacity-50 cursor-not-allowed';
    return (_jsx("button", { className: `${baseClasses} ${variantClasses[variant]} ${disabled ? disabledClass : ''} ${className}`, onClick: onClick, disabled: disabled, children: children }));
};
export default Button;
