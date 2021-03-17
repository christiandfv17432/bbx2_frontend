import React from 'react'
import PropTypes from 'prop-types'
import { useSelector} from 'react-redux'

const Prueba = () => {
    const itemList = useSelector(state=>state);
    console.log(itemList.items)
    return (
        <div>
            <p>Hola mundo</p>
        </div>
    )
}

Prueba.propTypes = {

}

export default Prueba
