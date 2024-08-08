import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } 
from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

const EventCard = () => {
  return (
    <div className='px-3 py-3'>
        <Card sx={{width:345}}>
            <CardMedia sx={{height:345}}
            image='https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <CardContent>
                <Typography variant='h5'>
                    Indian Fast Food
                </Typography>
                <Typography variant='body2'>
                    50% off on your first order
                </Typography>
                <div className='py-2 space-y-2'>
                    <p>
                        {"Mumbai"}
                    </p>
                    <p className='text-sm text-blue-500'>February 14, 2024 12:00 AM</p> 
                    <p className='text-sm text-red-500'>February 15, 2024 12:00 AM</p>
                </div>
            </CardContent>
           {true && <CardActions>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>}
        </Card>
    </div>
  )
}

export default EventCard