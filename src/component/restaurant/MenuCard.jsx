import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'

const ingredients = [
    {
        category:"Nuts & Seeds",
        ingredient:["Cashews"]
    },
    {
        category:"Protein",
        ingredient:["Ground Beef","Bacon Strips" ]
    }
]

const MenuCard = () => {
    const handleCheckBoxChange=(value)=>{
        console.log("value")
    }
  return (
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <div className='lg:flex items-center justify-between'>
        <div className='lg:flex items-center lg:gap-5'>
            <img className='w-[7rem] h-[7rem] object-cover' src="https://images.pexels.com/photos/3764353/pexels-photo-3764353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                <p className='font-semibold text-xl'>
                    Burguer 
                </p>
                <p>
                    R$ 10000000
                </p>
                <p className='text-gray-400'>
                    Nice Burguer - tô com fome :')
                </p>
            </div>
        </div>
      </div>
    </AccordionSummary>
    <AccordionDetails>
        <form>
            <div className='flex gap-5 flex-wrap'>
                {
                    ingredients.map((item)=>
                        (<div>
                            <p>
                                {item.category}
                            </p>
                            <FormGroup>
                                {item.ingredient.map((item)=>(<FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(item)}/>} label={item}/>))}  
                            </FormGroup>
                        </div>
                        ))}
            </div>
            <div className='pt-5'>
                <Button variant='contained' disabled={false} type='submit'>
                    {
                        true?"Add to Cart":"Out of Stock"
                    }
                </Button>
            </div>
        </form>
    </AccordionDetails>
  </Accordion>
  )
}

export default MenuCard