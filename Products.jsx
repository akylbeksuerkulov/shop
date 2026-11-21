import { Link, Outlet } from 'react-router-dom';

const items = [
  { id: 1, name: 'Ноутбук Pro 15' },
  { id: 2, name: 'Смартфон X' },
  { id: 3, name: 'Беспроводные наушники' },
];

export default function Products() {
  return (
    <div>
      <h1>Наши товары (Products)</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {/* Ссылка ведет на /products/1, /products/2 и т.д. */}
            <Link to={`/products/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <hr />
      {/* В этом месте будет отображаться страница Details при клике на товар */}
      <Outlet />
    </div>
  );
}