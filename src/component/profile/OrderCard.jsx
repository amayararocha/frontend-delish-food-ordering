import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img className='h-16 w-16'
            src="https://images.pexels.com/photos/18346265/pexels-photo-18346265/free-photo-of-almoco-refeicao-queijo-fotografia-de-alimentos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div>
            <p>
                Burguer
            </p>
            <p>
                R$50,00
            </p>
        </div>
        </div>
        <div>
            <Button 
            className='cursor-not-allowed'>Completed</Button>
        </div>
    </Card>
  )
}

export default OrderCard