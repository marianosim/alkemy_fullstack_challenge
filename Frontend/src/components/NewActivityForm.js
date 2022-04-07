import React from 'react';
import { useState} from 'react';

function NewActivityForm(props) {
 

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [category_id, setCategory_id] = useState('');
  const [message, setMessage] = useState('');

  const handleNewForm = async (e) => {
    e.preventDefault();
    let info = {
        description: description,
        amount: amount,
        type: type,
        category_id: category_id
      };
      let res = await fetch('http://localhost:3001/api/activities/create', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
      },
        body: JSON.stringify(info)
      });
      await res.json();
      if (res.status === 200) {
        setDescription("");
        setAmount("");
        setType("");
        setCategory_id("");
        setMessage("Movimiento creado con éxito");
      } else {
        setMessage("Ocurrió un problema");
      }
      props.getActivities();
    };
  
  

    return (
        //Form to add new movement
        <div className=''>
            
        <form className='movement-form' onSubmit={handleNewForm}>
        <h4>Nuevo registro</h4>
      <div className="form-group pb-2">
      <label className='form-label'>Descripción:</label>
          <input type="text"
            value={description}
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="Ej.: Recarga de celular"
            name='description'
            onChange={(e) => setDescription(e.target.value)} />
  </div>
  <div className="form-group pb-2">
      <label className='form-label'>Monto:</label>
          <input
          type='text'
          className="form-control"
          name = 'amount'
          value={amount}
          placeholder='Ingrese el monto...'
          onChange={(e) => setAmount(e.target.value)}/>
        </div>
  <div className="form-group pb-2">
      <label className='form-label'>Categorías:</label>
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
    <div className="form-group pb-2">
    <label className='form-label'>Tipo de movimiento:</label>
        <select className="form-select" 
        id="exampleFormControlSelect2"
        name='type'
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder='Seleccione uno...'>
          <option >Seleccione uno...</option>
          <option>Ingreso</option>
          <option>Egreso</option>
        </select>
</div>
  <button type="submit"  className="btn btn-primary mt-3">Confirmar</button>
  <div className="message">{message ? <p>{message}</p> : null}</div>
</form>
        </div>
        
    )
}
export default NewActivityForm;