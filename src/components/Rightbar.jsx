import { Message } from "@mui/icons-material";
import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";
import ListConversation from "./ListConversation";

function Rightbar() {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];
  return (
    <Box p={2} flex={2} mb={2} sx={{display: { xs: "none", sm: "block" } }}>
      <Box mr={2} sx={{position: 'fixed'}}>
      <Typography variant="h6" fontWeight={100}>
        Online Friends
      </Typography>
      <AvatarGroup sx={{display: 'flex', justifyContent: 'left'}} max={6}>
        <Avatar
          alt="Remy Sharp"
          src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/323409666_1536086800136732_4761646431659508687_n.jpg?stp=cp6_dst-jpg_p843x403&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=kKx4n-b1lCwAX_9GQn5&tn=rQiWCmB_waH2IhSe&_nc_ht=scontent.fhan2-5.fna&oh=00_AfAE2HtL-0_3m8tdrly3yLrU-BRAgqLD_V6YZKv7XZT_0A&oe=63BD0F87"
        />
        <Avatar
          alt="Travis Howard"
          src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/324348018_497951925805696_8351723796262264907_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=ASWuFfUvG0MAX-rm8Ra&_nc_ht=scontent.fhan2-3.fna&oh=00_AfA9c-fifkWrjUtFTc45BdgQBdwfiusrfkltNWQy2LzzPQ&oe=63BD89CE"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/323112731_1237698527183428_3049810866963055204_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=T_qc4WT3qHYAX96jyWE&_nc_ht=scontent.fhan2-5.fna&oh=00_AfCl-YxSqWlqjkNPQdtga9dg5yKmsuOM2V1Ql_AsoCjGBw&oe=63BC5661"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/324352091_1906591113013914_5318060110941946986_n.jpg?stp=dst-jpg_p843x403&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0qt370N-ycUAX_AZArs&_nc_ht=scontent.fhan2-3.fna&oh=00_AfCeMVuowqauK7wym8C4Z_0AlSXpCAF_Rwxk5yV8G8WzOw&oe=63BC1D95"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/321434493_3595006560715657_8523882759279892569_n.jpg?stp=cp6_dst-jpg_p843x403&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=g0FZ-7FzKIgAX91_b3v&_nc_ht=scontent.fhan2-4.fna&oh=00_AfCGANy43DFEzkKeqd7dlev5Rbp4dKqizic_5XWjhQNI8A&oe=63BC7E45"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/321762054_720902549416196_2682804779307937470_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=XEUo2WSQqGIAX_6L3UM&_nc_ht=scontent.fhan2-3.fna&oh=00_AfA0j1WDbQBobqM6wZTf8hjVwDqkLXRlDGNFYziEFBuOow&oe=63BC2A05"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/324332071_564245845552129_5523124583888581993_n.jpg?stp=dst-jpg_p843x403&_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=15hlguNLTN4AX9lGMUb&tn=rQiWCmB_waH2IhSe&_nc_ht=scontent.fhan2-3.fna&oh=00_AfAr48pnf18DOhrEixKCZrHYemDADO9v8Wn6vsOct06L7A&oe=63BC8FB6"
        />
      </AvatarGroup>
      <Typography variant="h6" fontWeight={100}>Lastest Photos</Typography>
      <ImageList cols={6} gap={5}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversation
      </Typography>   
         <ListConversation />
      </Box>
    </Box>
  );
}

export default Rightbar;
