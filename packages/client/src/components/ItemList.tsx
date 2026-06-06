export default function ItemList({ items, setItems }) {
  const renderedItems = items.map(({ id, title, description }) => {
    return (
      <div
        key={id}
        className='flex flex-row border border-[#2a2a2a] rounded-xl p-4 mx-3 mb-3 justify-between hover:border-[#3a3a3a] hover:-translate-y-1 transition-all duration-200
'
      >
        <div className='flex flex-col '>
          <h1 className='text-[#e8e8e8] text-2xl'>{title}</h1>
          <h2 className='text-[#666] font-medium'>{description}</h2>
        </div>
        <div className='flex flex-col'>
          <button
            onClick={() => {
              setItems(items.filter((item) => item.id !== id));
            }}
            className={`text-white bg-[#1a1a1a] rounded-2xl cursor-pointer m-0.5 h-10 w-20 hover:bg-green-700 transition-colors duration-200 `}
          >
            ✓ Done
          </button>
          <button
            onClick={() => {
              setItems(items.filter((item) => item.id !== id));
            }}
            className={`text-white bg-[#1a1a1a] rounded-2xl cursor-pointer m-0.5 mt-2 h-10 w-20 hover:bg-red-700 transition-colors duration-200 `}
          >
            ✕ Delete
          </button>
        </div>
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}
