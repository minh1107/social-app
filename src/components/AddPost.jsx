import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";
import { Stack } from "@mui/system";
import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});
function AddPost({mode, setMode}) {
  const [open, setOpen] = useState(false);
  return (
    <Box 
      sx={{
        position: "fixed",
        bottom: 40,
        left: { xs: "calc(50% - 25px)", md: 30 },
      }}
    >
      <Tooltip title="Create post" onClick={(e) => setOpen(true)}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyleModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
        bgcolor={mode === 'light' ? 'white' : 'black' } color={mode === 'light' ? 'black' : 'white' }
          width={600}
          height={400}
          borderRadius={4}
          p={3}
          sx={{
            position: "fixed",
          }}
        >
          <Typography variant="h5" color={"gray"} textAlign={"center"}>
            Create post
          </Typography>
          <UserBox>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
            <Typography>Minh</Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            rows={4}
            multiline
            id="standard-helperText"
            label="What's your mind?"
            helperText="Enter when you complete!"
            variant="standard"
          />
          <Stack direction={"row"} mt={2} mb={3} gap={1}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            sx={{ height: "40px" }}
            fullWidth
            variant="contained"
            aria-label="outline primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyleModal>
    </Box>
  );
}

export default AddPost;
