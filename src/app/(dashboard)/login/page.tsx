"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  InputAdornment,
  IconButton,
  Paper,
  Link,
  Divider,
  Alert,
  Snackbar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Visibility, VisibilityOff, Google, GitHub } from "@mui/icons-material";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// Custom styled components
const LoginPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "0 8px 40px rgba(0, 0, 0, 0.12)",
  borderRadius: 16,
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const SocialButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  padding: theme.spacing(1.5, 2),
  marginBottom: theme.spacing(2),
  justifyContent: "flex-start",
  transition: "all 0.3s",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  },
}));

type SnackbarSeverity = 'success' | 'error' | 'info' | 'warning';

export default function LoginComponent() {
  const router = useRouter();

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: SnackbarSeverity;
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  // ✅ FIXED: handleChange with correct types
  const handleChange =
    (prop: "email" | "password") =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
      setErrors({ ...errors, [prop]: "" });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!values.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email address is invalid";
      valid = false;
    }

    if (!values.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (values.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        const result = await signIn("credentials", {
          redirect: false,
          email: values.email,
          password: values.password,
        });

        if (result?.error) {
          setSnackbar({
            open: true,
            message: "Login failed: " + result.error,
            severity: "error",
          });
        } else {
          setSnackbar({
            open: true,
            message: "Login successful! Redirecting to dashboard...",
            severity: "success",
          });
        }
      } catch (error) {
        console.error("Login error:", error);
        setSnackbar({
          open: true,
          message: "An error occurred during login.",
          severity: "error",
        });
      }
    }
  };

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          mb: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LoginPaper elevation={3}>
          <Typography
            component="h1"
            variant="h4"
            sx={{ mb: 4, fontWeight: 700 }}
          >
            Welcome Back
          </Typography>

          <Box sx={{ width: "100%", mb: 3 }}>
            <SocialButton
              variant="outlined"
              fullWidth
              startIcon={<Google />}
              onClick={handleGoogleSignIn}
            >
              Continue with Google
            </SocialButton>
          </Box>

          <Divider sx={{ width: "100%", mb: 3 }}>
            <Typography color="text.secondary" variant="body2">
              OR
            </Typography>
          </Divider>

          <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={values.email}
              onChange={handleChange("email")} // ✅ added back
              error={!!errors.email}
              helperText={errors.email}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              autoComplete="current-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")} // ✅ added back
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 3 }}
            />
            <Box sx={{ textAlign: "right", mb: 2 }}>
              <Link href="#" variant="body2" underline="hover">
                Forgot password?
              </Link>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                mt: 1,
                mb: 3,
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                "&:hover": {
                  boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              Sign In
            </Button>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2" color="text.secondary">
                Don&apos;t have an account?{" "}
                <Link
                  href="#"
                  variant="body2"
                  underline="hover"
                  sx={{ fontWeight: 600 }}
                >
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Box>
        </LoginPaper>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}
