import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import {
  Box,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";


const Profile = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };

  const theme = useTheme();

  
  return (
    <Box>
      <IconButton
        size="large"
        aria-label="menu"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === "object" && {
            borderRadius: "9px",
          }),
        }}
        onClick={handleClick2}
      >
        <Avatar
          src={"/images/users/3.jpg"}
          alt={"ProfileImg"}
          sx={{
            width: 30,
            height: 30,
          }}
        />
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
            alignItems: "center",
          }}
        >
          <Typography
            color="textSecondary"
            variant="h5"
            fontWeight="400"
            sx={{ ml: 1 }}
          >
            Hi Code Crunch
          </Typography>
          <Typography
            variant="h5"
            fontWeight="700"
            sx={{
              ml: 1,
            }}
          >
          
          </Typography>
        </Box>
      </IconButton>
    </Box>
  );
};

export default Profile;
