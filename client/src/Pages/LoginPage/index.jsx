import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography, CircularProgress, Box } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomButton from "../../Components/CustomButton";
import CustomInput from "../../Components/CustomInput";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const handleLogin = (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }

        if (!email || !password) {
            toast.info("Please enter both email and password", { position: "top-right" });
            return;
        }

        setLoading(true);
        setTimeout(() => {
            toast.dark("Login Successful!", { position: "top-right" });
            navigate('/home');
            setLoading(false);
        }, 1500);
    };


    return (
        <Box
            sx={{
                backgroundColor: "#000",
                color: "#fff",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                filter: loading ? "blur(2px)" : "none",
                px: 2,
            }}
        >

            <ToastContainer
            />

            <Typography sx={{ fontSize: "3rem", fontFamily: "Helvetica Neue", color: "#2196f3", mb: 4 }}>
                Student Attendance Tracker
            </Typography>

            <Box
                sx={{
                    width: "100%",
                    maxWidth: 400,
                    backgroundColor: "#121212",
                    borderRadius: "12px",
                    p: 4,
                    boxShadow: "0 0 15px rgba(33, 150, 243, 0.3)",
                }}
            >
                <Typography sx={{ fontSize: "2rem", mb: 3, textAlign: "center" }}>
                    Sign in to your account
                </Typography>

                <form onSubmit={handleLogin}>
                    <Box sx={{ mb: 2 }}>

                        <CustomInput
                            updateValue={setEmail}
                            inputType="email"
                            currentValue={email}
                            label="Enter your Email"
                            fullWidth
                            maxLength={50}
                            className="email-input"
                        />

                    </Box>

                    <Box sx={{ mb: 3 }}>
                        <CustomInput
                            updateValue={setPassword}
                            inputType="password"
                            currentValue={password}
                            label="Enter your Password"
                            fullWidth
                            maxLength={50}
                            className="password-input"
                        />
                    </Box>

                    <CustomButton
                        updateClick={handleLogin}
                        btnText={
                            loading ? <CircularProgress size={24} color="inherit" /> : "Submit"
                        }
                        btnType="submit"
                        variant="contained"
                        disabled={loading}
                        btnStyles={{
                            width: "100%",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            padding: "12px",
                            backgroundColor: "#2196f3",
                            color: "#fff",
                            border: "none",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease",
                        }}
                    />


                    <Typography sx={{ mt: 2, textAlign: "center" }}>
                        <Link to="/signUp" style={{ color: "#90caf9", textDecoration: "none", fontWeight: "bold" }}>
                            Create an Account?
                        </Link>
                    </Typography>
                </form>
            </Box>

            {loading && (
                <Box
                    sx={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        zIndex: 999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        sx={{
                            border: "4px solid #2196f3",
                            borderTop: "4px solid #fff",
                            borderRadius: "50%",
                            width: "40px",
                            height: "40px",
                            animation: "spin 1s linear infinite",
                        }}
                    />
                </Box>
            )}

            {/* Loader animation keyframe using global style */}
            <style>
                {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
            </style>
        </Box>
    );
}

export default LoginPage;
