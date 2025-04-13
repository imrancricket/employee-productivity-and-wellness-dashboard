import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Alert,
  Link,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonOutline from "@mui/icons-material/PersonOutline";
import { useNavigate } from "react-router-dom";

const SignIn = ({setIsAuthenticated}) => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");


  const handleLogin = () => {
    if (email === "user@example.com" && password === "U2FsdGVkX1+9rqxFXdiFMZR1iM+ndzjgCFsHbNJEwRi1Czi70dgOFaHgIbbck3D2") {
      alert("Login Successful!");
      navigate("/dashboard")
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: 400,
          padding: 4,
          textAlign: "center",
          borderRadius: 3,
          backgroundColor: "#1b263b",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          Login to Your Account
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#fff", marginBottom: 2 }}
        >
          Please enter your credentials below.
        </Typography>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonOutline />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ mb: 3 }}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={handleLogin}
          sx={{
            backgroundColor: "#1976d2",
            "&:hover": { backgroundColor: "#1565c0" },
            mb: 2,
          }}
        >
          Login
        </Button>
        <Link href="#" variant="body2" underline="hover">
          Forgot password?
        </Link>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account?{" "}
          <Link href="#" underline="hover">
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignIn;









