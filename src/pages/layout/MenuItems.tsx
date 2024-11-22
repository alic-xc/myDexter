import {
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import Logo from "../../icons/Logo";
import MagicAIIcon from "../../icons/MagicAIIcon";
import AnalyticsIcon from "../../icons/AnalyticsIcon";
import BlogWriterIcon from "../../icons/BlogWriterIcon";
import SignInIcon from "../../icons/SignInIcon";
import MenuIcon from "../../icons/MenuIcon";

interface nav {
  icon: React.ReactNode;
  name: string;
  link: string;
}

const MenuItems = () => {
  const navs: nav[] = [
    { icon: <MagicAIIcon />, name: "Dexter AI", link: "" },
    { icon: <AnalyticsIcon />, name: "Analytics", link: "" },
    { icon: <BlogWriterIcon />, name: "Blog Post", link: "" },
    { icon: <SignInIcon />, name: "Sign In", link: "" },
  ];

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        px={3}
        py={2}
        mt={2}
      >
        <Logo />
        <MenuIcon />
      </Stack>
      <Typography
        px={3}
        my={1}
        fontWeight={400}
        fontSize={10}
        textTransform={"uppercase"}
      >
        Assistant
      </Typography>
      <List sx={{ px: 2, mb: 2 }}>
        {navs.map((item, index) => (
          <ListItem
            style={{
              height: 46,
              marginBottom: 3,
            }}
            key={index}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon style={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography fontWeight={600} fontSize={18}>
                    {item.name}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Stack direction="column" gap={2} p={3}>
        <Typography>
          Create a free account, or go Pro to unlock automated blog creation and
          domain analytics!
        </Typography>
        <Button
          variant="outlined"
          sx={{
            borderWidth: 2,
            fontSize: 18,
            fontWeight: 500,
            borderRadius: 5,
          }}
        >
          Sign Up
        </Button>
      </Stack>
      <Divider />
      <Stack direction="column" gap={1} p={3}>
        <Typography fontWeight={700} fontSize={16}>
          Why My Dexter?
        </Typography>
        <Typography fontWeight={700} fontSize={16}>
          {" "}
          FAQ
        </Typography>
        <Typography fontWeight={700} fontSize={16}>
          Terms & Policies
        </Typography>
        <Typography>© 2024 My Dexter</Typography>
      </Stack>
    </Box>
  );
};

export default MenuItems;
