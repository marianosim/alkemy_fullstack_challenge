import React from 'react';
import { useState} from 'react';

function NewActivityForm(props) {
 

  const [description, setDescription] = useState(props.description);
  const [amount, setAmount] = useState(props.amount);
  const [type, setType] = useState(props.type);
  const [category_id, setCategory_id] = useState(props.category_id);
  
  

    return (

        <div>
            <h4>{props.edit ? 'Editar registro:' : 'Nuevo registro:'}</h4>
        <form onSubmit={props.function}>
      <div className="form-group">
      <label>Descripción:</label>
          <input type="text" 
            //defaultValue={props.description}
            defaultValue= {description}
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="Ej.: Recarga de celular"
            name='description'
            onChange= {(e) => setDescription({...description, [e.target.description]: e.target.value})} />
  </div>
  <div className="form-group">
      <label>Monto:</label>
          <input
          type='text'
          className="form-control"
          name = 'amount'
          defaultValue={amount}
          placeholder='Ingrese el monto...'
          onChange={(e) => setAmount(e.target.value)}/>
        </div>
  <div className="form-group">
      <label>Categorías:</label>
          <select className="form-control" 
          id="exampleFormControlSelect1" 
          value={category_id}
          onChange={(e) => setCategory_id(e.target.value)}>
                <option>Seleccione una...</option>
                <option value={1}>Compras</option>
                <option value={2}>Servicios</option>
                <option value={3}>Entretenimiento</option>
                <option value={4}>Restaurantes y Bares</option>
                <option value={5}>Supermercado</option>
                <option value={6}>Transporte</option>
                <option value={7}>Varios</option>
          </select>
  </div>
  <div className="form-group">
      <label>Tipo de movimiento:</label>
          <select className="form-control" 
          id="exampleFormControlSelect2"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder='Seleccione uno...'>
            <option >Seleccione uno...</option>
            <option>Ingreso</option>
            <option>Egreso</option>
          </select>
  </div>
 
  <button type="submit"  className="btn btn-primary mt-3">Confirmar</button>
  <div className="message">{props.message ? <p>{props.message}</p> : null}</div>
</form>
        </div>
        
    )
}
export default NewActivityForm;