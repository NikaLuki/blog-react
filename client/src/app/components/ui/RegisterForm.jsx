import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/admin";
import TextField from "../common/TextField";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp(data));
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                type={"email"}
                name={"email"}
                label={"Your Email"}
                onChange={handleChange}
                value={data.email}
            />
            <TextField
                type={"password"}
                name={"password"}
                label={"Your password"}
                onChange={handleChange}
                value={data.password}
            />
            {/* <TextField
                type={"text"}
                name={"name"}
                label={"Repeat password"}
                onChange={handleChange}
                value={data.name}
            /> */}
            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Register
            </button>
        </form>
    );
};

export default RegisterForm;
