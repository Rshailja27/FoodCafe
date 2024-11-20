import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth() {
  const [quantity, setQuantity] = React.useState(1);
  const menuItems = [1,2,3,4,5,6,7,8,9,10];
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ ml: 1,mr:1, minWidth: 50 }}>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={quantity}
          onChange={handleChange}
          autoWidth
          label="1"
          sx={{
            fontSize: '0.875rem', // Reduces font size
            padding: '4px', // Adjust padding
            height: '30px', // Adjust the height of the select dropdown
          }}
        >
             {menuItems.map((menuItem) => (
            <MenuItem key={menuItem} value={menuItem}>
              {menuItem}
            </MenuItem>
          ))}
          
        </Select>
      </FormControl>
    </div>
  );
}
