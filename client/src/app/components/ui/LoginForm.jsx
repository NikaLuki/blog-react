import React, { useState } from "react";
import TextField from "../common/TextField";
import { useDispatch } from "react-redux";
import { logIn } from "../../store/admin";

const LoginForm = () => {
    const dispatch = useDispatch();
    // const loginError = useSelector(getAuthError());
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
        dispatch(logIn({ payload: data }));
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                type={"email"}
                name={"email"}
                label={"Email"}
                onChange={handleChange}
                value={data.email}
            />
            <TextField
                type={"password"}
                name={"password"}
                label={"Пароль"}
                onChange={handleChange}
                value={data.password}
            />
            <button
                type="submit"
                onSubmit={handleSubmit}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                LogIn
            </button>
        </form>
    );
};

export default LoginForm;
