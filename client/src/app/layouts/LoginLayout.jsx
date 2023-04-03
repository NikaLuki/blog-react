import React, { useState } from "react";
import LoginForm from "../components/ui/LoginForm";
import RegisterForm from "../components/ui/RegisterForm";

const LoginLayout = () => {
    const [formType, setFormType] = useState("login");
    const toggleFormType = () => {
        setFormType((prevState) =>
            prevState === "register" ? "login" : "register"
        );
    };
    return (
        <div className="w-full flex justify-center">
            <div className="w-1/2">
                {formType === "login" ? (
                    <>
                        <h3 className="mb-3">Login</h3>
                        <LoginForm />
                        <p className="mt-2 mb-0 pt-1 text-sm font-semibold">
                            Don`t have an account?
                            <a
                                role={"button"}
                                onClick={toggleFormType}
                                className="text-blue-600 hover:underline dark:text-blue-500 pl-1"
                            >
                                Register
                            </a>
                        </p>
                    </>
                ) : (
                    <>
                        <h3 className="mb-3">Register</h3>
                        <RegisterForm />
                        <p className="mt-2 mb-0 pt-1 text-sm font-semibold">
                            Have an account?
                            <a
                                role={"button"}
                                onClick={toggleFormType}
                                className="text-blue-600 hover:underline dark:text-blue-500 pl-1"
                            >
                                Login
                            </a>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default LoginLayout;
