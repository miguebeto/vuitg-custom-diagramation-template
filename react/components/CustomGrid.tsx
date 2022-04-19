import React from 'react';
import customGridSchema from '../schemas/custom-grid-schema';

const CustumGrid = ({ gridType = 1 }) => {
    return <div>Aqui irá mi grilla customizada{gridType}</div>
}

CustumGrid.schema = customGridSchema;

export default CustumGrid;