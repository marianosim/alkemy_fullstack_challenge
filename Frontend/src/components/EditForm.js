import React from 'react';
import { useState } from 'react'

const EditForm = (props) => {
 

  const [description, setDescription] = useState(props?.description);
  const [amount, setAmount] = useState(props?.amount);
  const [category_id, setCategory_id] = useState(props?.category_id);

  
    return (
        //Edit movement form
        <div className='form-responsive p-5'>
            
        <form className='edit-form' onSubmit={props.function}>
        <h4>Editar registro</h4>
      <div className="form-group">
      <label>Descripción:</label>
          <input type="text" 
            value={description}
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="Ej.: Recarga de celular"
            name='description'
            onChange= {e => setDescription(e.target.value)} />
  </div>
  <div className="form-group">
      <label>Monto:</label>
          <input
          type='number'
          className="form-control"
          name = 'amount'
          value={amount}
          placeholder='Ingrese el monto...'
          onChange={(e) => setAmount(e.target.value)}/>
        </div>
  <div className="form-group">
      <label>Categorías:</label>
          <select className="form-select" 
          id="exampleFormControlSelect1"
          name='category_id' 
          value={category_id}
          onChange={(e) => setCategory_id(e.target.value)}>
                <option >Seleccione una...</option>
                <option value={1}>Compras</option>
                <option value={2}>Servicios</option>
                <option value={3}>Entretenimiento</option>
                <option value={4}>Restaurantes y Bares</option>
                <option value={5}>Supermercado</option>
                <option value={6}>Transporte</option>
                <option value={7}>Varios</option>
          </select>
  </div>
  
  <button type="submit"  className="btn btn-primary mt-3">Confirmar</button>
    </form>
    </div>
        
    )
}
export default EditForm;