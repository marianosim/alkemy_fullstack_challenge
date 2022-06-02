import React, { useState } from 'react';

const NewTransactionForm = (props) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('');
    const [category_id, setCategory_id] = useState('');
    const [message, setMessage] = useState('');
  
    //Adds new transaction

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
        /*Clears form after adding new transaction and displays success/failure message*/
        if (res.status === 200) {
          setDescription("");
          setAmount("");
          setType("");
          setCategory_id("");
          setMessage("Movimiento creado con éxito");
          setTimeout(()=> {setMessage("")}, 5000);
        } else {
          setMessage("Ocurrió un problema");
          setTimeout(()=> {setMessage("")}, 5000);
        }
        props.getActivities();
      };


  return (
    <section className="new-transaction-section">
      <h2 style={{color: 'white'}}>Nuevo registro</h2>
      <form onSubmit={handleNewForm} >
        <div className="d-flex flex-wrap form-wrapper">
          <div>
            <label htmlFor="description">Descripción</label>
            <input
              id="description"
              className='form-control'
              value={description}
              placeholder="Ej.: Recarga de celular"
              onChange={(e) => setDescription(e.currentTarget.value)}
              type="text"
            />
          </div>
          <div className='form-group pb-2'>
            <label className='form-label' htmlFor="amount">Monto</label>
            <input
              id="amount"
              className='form-control'
              value={amount}
              placeholder='Ingrese el monto...'
              onChange={(e) => setAmount(e.currentTarget.value)}
              type="number"
              step="0.01"
            />
          </div>
          <div>
            <label htmlFor="category">Categoría</label>
            <select
              id="category"
              value={category_id}
              onChange={(e) => setCategory_id(e.currentTarget.value)}
            >
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
          <div>
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
        </div>
      <div className='d-flex justify-content-between'>
          <button type='submit'>Confirmar</button>
            <span style={{color: 'white', fontSize: '10px'}}>Copyright &copy; My Bud(get) Planner </span>
      </div>
        <div className="message" id='message' style={{color: 'white'}}>{message ? <p>{message}</p> : null}</div>
      </form>
    </section>
  );
}
export default NewTransactionForm;