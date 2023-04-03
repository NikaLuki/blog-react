import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = ({ type, label, name, value, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div className="mb-6">
            <label
                htmlFor={name}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <div className="relative">
                {type === "password" && (
                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3 "
                        onClick={toggleShowPassword}
                    >
                        show
                    </button>
                )}
                <input
                    type={showPassword ? "text" : type}
                    name={name}
                    id={name}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={label}
                    value={value}
                    onChange={handleChange}
                    required
                />
            </div>
        </div>
    );
};

export default TextField;

TextField.defaultProps = {
    type: "text"
};
TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};
