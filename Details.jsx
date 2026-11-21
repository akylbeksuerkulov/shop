import { useParams, Link } from 'react-router-dom';

export default function Details() {
  const { id } = useParams();

  return (
    <div style={{ padding: '15px', backgroundColor: '#f9f9f9', marginTop: '10px' }}>
      <h2>Детали товара (Details)</h2>
      <p>Вы просматриваете подробную информацию о товаре с <strong>ID: {id}</strong>.</p>
      <Link to="/products">Закрыть детали</Link>
    </div>
  );
}