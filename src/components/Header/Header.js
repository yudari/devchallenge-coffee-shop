import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from '../Common/Button/Button';
const Header = ({ onFilterChange, currentFilter }) => {
    return (_jsxs("div", { className: 'text-center mb-12', children: [_jsx("h1", { className: 'text-4xl font-bold text-white mb-4', children: "Our Collection" }), _jsx("p", { className: 'text-gray-400 max-w-2xl mx-auto mb-0 leading-relaxed', children: "introducing our Coffee Collection, a selection of unique coffee from different roast types and origins, expertly roasted in  small batches" }), _jsxs("div", { className: 'flex justify-center space-x-4 mt-8', children: [_jsx(Button, { variant: currentFilter === 'all' ? 'primary' : 'secondary', onClick: () => onFilterChange('all'), children: "All Products" }), _jsx(Button, { variant: currentFilter === 'available' ? 'primary' : 'secondary', onClick: () => onFilterChange('available'), children: "Available Now" })] })] }));
};
export default Header;
