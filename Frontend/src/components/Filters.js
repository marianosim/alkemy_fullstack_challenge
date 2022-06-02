import React from "react";

// Filters transactions by category

const Filters = ({handleCategoryChange}) => {

    return (
        <div className="app">
      <div>
        <h6>Filtrar por Categoría:</h6>
        <div>
          <select
            className="form-select form-select-sm"
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="Todas">Todas</option>
            <option value="Compras">Compras</option>
            <option value="Servicios">Servicios</option>
            <option value="Entretenimiento">Entretenimiento</option>
            <option value="Restaurantes y bares">Restaurantes y bares</option>
            <option value="Supermercado">Supermercado</option>
            <option value="Transporte">Transporte</option>
            <option value="Varios">Varios</option>
          </select>
        </div>
      </div>
    </div>
    )
}

export default Filters; 