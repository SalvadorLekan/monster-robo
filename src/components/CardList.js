import React from 'react'
import Card from './Card'

function CardList(props) {
    return (
        <div className='container-fluid row'>
            {
                props.monsters.length? props.monsters.map(monster=><Card key={monster.id} name={monster.name} img={monster.id} mail={monster.email}/>): <div className='display-4 text-center mx-auto'>No Result</div>
            }
            {console.log(props.monsters)}
        </div>
    )
}

export default CardList
