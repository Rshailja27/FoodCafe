import {React, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './MenuCard.css'; 


function MenuCard({ foodMenu, handleIsLike, incrCount}) {  

  return (
    <div className="card-container">
      {
        foodMenu.map((item) => {
          const {id, foodName, category, image, price,description, isLike } = item;
          return (
            <Card key={ id } className="card-item">
              <CardHeader
                title={<b>{ foodName}</b>}
                subheader={<span>Meal Category: {category}</span>}
                action={
                  <Box>                    
                    <IconButton aria-label="add to favorites" onClick={ () => handleIsLike(id) }>
                      {
                        isLike ? <FavoriteIcon style={{color: 'red'}} /> : <FavoriteIcon/>
                      }                      
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </Box>
                }
              />
              <CardMedia
                component="img"
                height="300"
                image={ image }
                alt="Food Item"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" component="span">
                  <b>Price : { price }&#8377;</b>
                  <br/>
                  { description }            
                </Typography>
              </CardContent>
              <CardActions  sx={{ marginTop: '-0.9rem' }} disableSpacing>            
                <Box sx={{ display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%', padding: '0 8px' 
                  }}>
                <Button variant="contained" color="primary" size='small' onClick={incrCount}>
                  Add to Cart
                </Button>
                <Button variant="contained" color="error" size='small'>
                  Order Now
                </Button>
              </Box> 
              </CardActions>             
            </Card>
          
          );
        
      })
    }
    </div>
  );
}

export default MenuCard;
