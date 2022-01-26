import React from 'react'

export default function SkeletonResults(props) {

    
    
    let cards = [];
    for (let i = 0; i < 14; i++) {
        cards.push(<div className='skelly-card'>
            {!props.mobile ? 
                <div className='skelly-card-top'>

                </div>
                :
                <div className='skelly-card-left'>
                    <div className='skelly-book-cover'></div>
                </div>
            }

            <div className='skelly-card-bottom'>
                <div className='skelly-title'>
                    
                </div>
                <div className='skelly-author'>
                    
                </div>
                <div className='skelly-extension'>
                    
                </div>
                <div className='skelly-date'>
                    
                </div>
            </div>
        </div>)
    }

    return (
        <div className='searchResults'>
            {cards}
        </div>
    )
}
