import React from 'react';
import { useState } from 'react';

function NewActivityForm() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [category_id, setCategory_id] = useState('');
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      description: description,
      amount: amount,
      type: type,
      category_id: category_id
    }
    try {
      let res = await fetch('http://localhost:3001/api/activities/create', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
      },
        body: JSON.stringify(data),
      })
      await res.json();
      if (res.status === 200) {
        setDescription("");
        setAmount("");
        setType("");
        setCategory_id("");
        setMessage("Movement created successfully");
      } else {
        setMessage("Some error occured");
      } 
    }catch (err) {
      console.log(err);
    }
  };

    return (

        <div>
            <h2>Nuevo registro:</h2>
        <form onSubmit={handleSubmit}>
  <div className="form-group">
      <label>Descripción:</label>
          <input type="text" 
            value={description}
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="Ej.: Recarga de celular"
            name='description'
            onChange={(e) => setDescription(e.target.value)} />
  </div>
  <div className="form-group">
      <label>Monto:</label>
          <input
          type='text'
          className="form-control"
          value={amount}
          placeholder='Ingrese el monto...'
          onChange={(e) => setAmount(e.target.value)}/>
        </div>
  <div className="form-group">
      <label>Categorías:</label>
          <select className="form-control" 
          id="exampleFormControlSelect1" 
          value={category_id}
          onChange={(e) => setCategory_id(e.target.value)} placeholder='Seleccione una...'>
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
 
  <button type="submit" className="btn btn-primary">Confirmar</button>
  <div className="message">{message ? <p>{message}</p> : null}</div>
</form>
        </div>
        
    )
}
export default NewActivityForm;