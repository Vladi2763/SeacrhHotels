import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import classes from "./Rating.module.css"

const BasicRating: React.FC<{ rating: any }> = (props) => {

    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
                color: '#1B1B1B',
            }}
        >
            <div className={classes.container}>
                <Rating name="read-only" value={props.rating} precision={0.1} readOnly size='small' sx={{
                    color: '#CDBC1E'
                }}/>
            </div>
        </Box>
    );
}

export default BasicRating;