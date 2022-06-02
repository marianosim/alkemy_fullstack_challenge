import React, { useState } from 'react';

const EditTransactionForm = (props) => {
    const [description, setDescription] = useState(props?.description);
    const [amount, setAmount] = useState(props?.amount);
    const [category_id, setCategory_id] = useState(props?.category_id);

// Edit transaction Form
 
/* The type of transaction is not included as it shouldn't be edited by user */
  return (
    <section className="new-transaction-section">
      <h2 style={{color: 'white'}}>Editar registro</h2>
      <form onSubmit={props.function} >
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
        </div>
        <div className='d-flex justify-content-between'>
          <button type='submit'>Confirmar</button>
            <span style={{color: 'white', fontSize: '10px'}}>Copyright &copy; My Bud(get) Planner </span>
      </div>
      </form>
    </section>
  );
}
export default EditTransactionForm;