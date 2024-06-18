import { Avatar, AvatarGroup, Box, ImageList, Divider, ImageListItem, Typography, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'

function RightBar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant='h6' fontWeight={300} >Online Friends</Typography>

        <Box sx={{ display: "flex", justifyContent: "start" }}>
          <AvatarGroup max={7}>
            <Avatar alt="Ferhan" src="https://www.retratosbarcelona.com/wp-content/uploads/2022/09/Corporate-Headshots-In-Barcelona-1-731x1024.jpg"
            />
            <Avatar alt="Travis Howard" src="https://www.retratosbarcelona.com/wp-content/uploads/2022/09/Retratos-Barcelona-Creative-Linkedin-Photography-.jpg" />
            <Avatar alt="Cindy Baker" src="https://www.retratosbarcelona.com/wp-content/uploads/2022/09/Retratos-Barcelona-Linkedin-Photo-Sydney.jpg" />
            <Avatar alt="Agnes Walker" src="" />
            <Avatar alt="Trevor Henderson" src="https://www.retratosbarcelona.com/wp-content/uploads/2022/09/Retratos-Barcelona-Linkedin-Photography-Alejandra.jpg" />
            <Avatar alt="Agnes Walker" src="https://www.retratosbarcelona.com/wp-content/uploads/2022/09/Retratos-Barcelona-Linkedin-Photography-Priyanka.jpg" />
            <Avatar alt="Trevor Henderson" src="https://www.retratosbarcelona.com/wp-content/uploads/2022/09/Retratos-Barcelona-Linkedin-Headshot-Antionetta.jpg" />
          </AvatarGroup>
        </Box>

        <Typography variant='h6' fontWeight={300} sx={{ marginTop: "10px", marginBottom: "10px" }}>Latest Photos</Typography>
        <ImageList col={3} rowHeight={100}>
          <ImageListItem>
            <img style={{ witdh: "50px", height: "100px", borderRadius: "10px" }} src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=242&h=121&fit=crop&auto=format" />
          </ImageListItem>
          <ImageListItem>
            <img style={{ witdh: "50px", height: "100px", borderRadius: "10px" }} src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=242&h=242&fit=crop&auto=format" />
          </ImageListItem>
          <ImageListItem>
            <img style={{ witdh: "50px", height: "100px", borderRadius: "10px" }} src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format" />
          </ImageListItem>
          <ImageListItem>
            <img style={{ witdh: "50px", height: "100px", borderRadius: "10px" }} src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format" />
          </ImageListItem>
        </ImageList>

        <Typography variant='h6' fontWeight={300} sx={{ marginTop: "10px" }}>Latest Conversations</Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://www.retratosbarcelona.com/wp-content/uploads/2022/09/Retratos-Barcelona-Linkedin-Headshot-Antionetta.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://www.retratosbarcelona.com/wp-content/uploads/2022/09/Corporate-Headshots-In-Barcelona-1-731x1024.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://www.retratosbarcelona.com/wp-content/uploads/2022/09/Retratos-Barcelona-Linkedin-Photo-Sydney.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>

    </Box>
  )
}

export default RightBar