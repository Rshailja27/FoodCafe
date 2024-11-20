import React, { useState } from 'react';
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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './MenuCard.css'; // Add your custom styles

function MenuCard({ foodMenu, handleIsLike, incrCount, handleCardClick }) {
  const [expanded, setExpanded] = useState(null);

  const truncateDescription = (description) => {
    const words = description.split(' ');
    return words.length > 15 ? words.slice(0, 15).join(' ') + '....' : description;
  };

  const handleToggleDescription = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  if (foodMenu.length === 0) {
    return <Typography variant="h6">No food items available!</Typography>;
  }

  return (
    <div className="card-container">

      {foodMenu.map((item) => {
        const { id, foodName, category, image, price, description, isLike } = item;
        const isDescriptionExpanded = expanded === id;

        return (
          <Card key={id} className="card-item">
            <CardHeader
              title={<b>{foodName}</b>}
              subheader={<span>Meal Category: {category}</span>}
              action={
                <Box>
                  <IconButton aria-label="add to favorites" onClick={() => handleIsLike(id)}>
                    {isLike ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteIcon />}
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
              image={image}
              alt={`Image of ${foodName}`}
              onClick={() => handleCardClick(item)}
              style={{ cursor: 'pointer' }}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" component="span">
                <b>Price: {price}&#8377;</b>
                <br />
                <div>
                  {isDescriptionExpanded ? description : truncateDescription(description)}
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
            <CardActions sx={{ marginTop: '-0.9rem' }} disableSpacing>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                  padding: '8px',
                  bgcolor: '#b30000',
                }}
              >
                <ShoppingCartIcon onClick={incrCount} style={{ color: '#fff', cursor: 'pointer' }} />
              </Box>
            </CardActions>
          </Card>
        );
      })}
   </div>
  );
}

export default MenuCard;
