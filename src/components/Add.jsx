import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon, DateRange, EmojiEmotions } from "@mui/icons-material"

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoCallIcon from '@mui/icons-material/VideoCall';
const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",

})

const Add = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <Tooltip onClick={e => setOpen(true)} title="Delete" sx={{ position: "fixed", bottom: "20px", left: { xs: "calc(50% - 25px)", md: 30 } }} >
                <IconButton>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </IconButton>
            </Tooltip >
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280}  bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                    <Typography variant='h6' color="gray" textAlign="center">
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar alt="Agnes Walker" src="https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109" />
                        <Typography fontWeight={500} variant="span">
                            Hamza Dogan
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standart-multiline-static"
                        multiline
                        rows={2}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color='primary' />
                        <VideoCallIcon color='second' />
                        <AddPhotoAlternateIcon color="error" />
                        <PersonAddIcon color="success" />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="Basic button group">
                        <Button>Post</Button>
                        <Button
                            sx={{ width: "100px" }}
                        ><DateRange /></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>

    )
}

export default Add