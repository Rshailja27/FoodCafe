import {React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Card,
     CardHeader, CardMedia, CardContent, 
     CardActions, IconButton, 
     Box, Button} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Quantity from './Quantity';
import './MenuCard.css'; 


function ShowCard({ foodItem, handleIsLike, incrCount}) { 

    const { id, foodName, category, image, price, description, isLike } = foodItem; 
    // Function to truncate description and show Read More
    const navigate = useNavigate(); // Hook for navigation

  const handleOrderNowClick = () => {
    navigate('/login'); // Redirect to the login page
  };
  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 15) {
      return words.slice(0, 15).join(' ') + '....'; // Limit to 20 words and add ellipsis
    }
    return description; // If less than or equal to 20 words, return the full description
  };

  // State to manage whether the description is expanded or not
  const [expanded, setExpanded] = useState(null);

  // Function to toggle description visibility
  const handleToggleDescription = (id) => {
    setExpanded(expanded === id ? null : id); // Toggle expand/collapse on click
  };
    const isDescriptionExpanded = expanded === id; // Check if this card's description is expanded

  return (
    <Box sx={{
        width:'100vw',
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
        >
        <Container maxWidth="xs">
            <Card className="card-item">
                <CardHeader
                title={<b>{ foodName }</b>}
                subheader={<span>Meal Category: {category}</span>}
                action={
                    <Box>                    
                    <IconButton
                  aria-label="add to favorites"
                  onClick={() => { handleIsLike(id); }}
                >
                  {isLike ? (
                    <FavoriteIcon style={{ color: 'red' }} />
                  ) : (
                    <FavoriteIcon />
                  )}
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
                    {/* Show truncated or full description based on whether it's expanded */}
                <div>
                  {isDescriptionExpanded
                    ? description // Full description when expanded
                    : truncateDescription(description)} 
                  {/* Toggle between truncated and full description */}
                  {description.split(' ').length > 15 && (
                    <span
                      style={{ color: '#0080ff', cursor: 'pointer' }}
                      onClick={() => handleToggleDescription(id)} 
                    >
                      {isDescriptionExpanded ? 'Show Less' : 'Read More'}
                    </span>
                  )}
                </div>            
                </Typography>
                </CardContent>
                <CardActions  sx={{ marginTop: '-0.9rem' }} disableSpacing>            
                <Box sx={{ display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%', padding: '8px' ,
                    }}>
                <Button variant="contained"
                color="error"
                size='small'
                sx={{border:'none'}}
                onClick={incrCount}>
                    Add to Cart
                </Button>
                <Quantity />
                <Button variant="contained" 
                color="error" size='small'
                onClick={handleOrderNowClick} >
                    Order Now
                </Button>
                </Box> 
                </CardActions>             
            </Card>
        </Container>
    </Box>
  );
}

export default ShowCard;
