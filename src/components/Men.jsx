import React from 'react'
import SlideShow from './SlideShow'
import { MEN_BIG_DEAL_CARDS, MEN_CATEGORIES_TO_BAG, MEN_SLIDE_SHOW, MEN_TOP_BRANDS } from '../assets/menConstants'
import CardContainer from './CardContainer'

const Men = () => {
  return (
    <div className='my-6'>
        <div>
            <SlideShow slideImg={MEN_SLIDE_SHOW}/>
        </div>
        <div>
            <h3>BIG DEALS ON TOP BRANDS</h3>
            <CardContainer cardList={MEN_BIG_DEAL_CARDS} widthRatio={"1/5"} />
        </div>
        <div>
            <h3>CATEGORIES TO BAGS</h3>
            <CardContainer cardList={MEN_CATEGORIES_TO_BAG} widthRatio={"1/6"} />
        </div>
        <div>
            <h3>EXPLORE TOP BRANDS</h3>
            <CardContainer cardList={MEN_TOP_BRANDS} widthRatio={"1/6"} />
        </div>

    </div>
  )
}

export default Men