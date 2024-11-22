import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button, IconButton, Stack, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Logo from "../../icons/Logo";

const ModalContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: 564,
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[24],
}));

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignIn: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => {
    const previousPath = location.state?.from || "/";
    navigate(previousPath, { replace: true });
    onClose();
  };

  return (
    <>
      <Modal open={isOpen} onClose={handleClose}>
        <ModalContainer>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <Typography>X</Typography>
          </IconButton>

          <Stack direction={"column"} alignItems={"center"} spacing={2}>
            <Logo />
            <Typography>Your personnal AI-powered SEO specialist</Typography>
            <Typography fontWeight={"bold"} color="#475467">
              Sign in to your account
            </Typography>
          </Stack>
          <Stack direction={"column"} spacing={2}>
            <Stack direction={"column"} spacing={1}>
              <Typography>Email</Typography>
              <TextField
                fullWidth
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                size="small"
                placeholder="Enter your email"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
            </Stack>
            <Stack direction={"column"} spacing={1}>
              <Typography>Password</Typography>
              <TextField
                fullWidth
                id="pasword"
                name="password"
                type="password"
                size="small"
                placeholder="Enter your password"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
            </Stack>
            <Stack direction={"column"} spacing={1}>
              <Button
                variant="contained"
                sx={{
                  borderWidth: 2,
                  fontSize: 18,
                  fontWeight: 500,
                  borderRadius: 5,
                  color: "white",
                }}
              >
                Get Started
              </Button>
            </Stack>
            <Typography textAlign={"center"} fontSize={13}>
              Not a My Dexter user yet?{" "}
              <NavLink to="/" style={{ textDecoration: "none" }}>
                Sign up here
              </NavLink>
            </Typography>
          </Stack>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default SignIn;
