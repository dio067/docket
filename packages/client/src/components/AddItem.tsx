import type AddItemProps from "../types/addItemProps";

export default function AddItem({
  newItem,
  setNewItem,
  handleAdd,
}: AddItemProps) {
  return (
    <div className='bg-mist-900 rounded-2xl flex flex-col justify-center items-center p-4 m-4 mt-0'>
      <div className='flex flex-row'>
        <div className='m-3 p-4 flex flex-col'>
          <input
            className='bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] placeholder-[#666] text-[#e8e8e8] focus:outline-none focus:ring-1 focus:ring-violet-500 p-3 pl-2'
            placeholder='Task Title'
            value={newItem.title}
            onChange={(e) => {
              setNewItem({ ...newItem, title: e.target.value });
            }}
          ></input>
        </div>
        <div className='flex flex-col p-4 pl-2 m-3'>
          <input
            className='bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] placeholder-[#666] text-[#e8e8e8] focus:outline-none focus:ring-1 focus:ring-violet-500  p-3 pl-2'
            placeholder='Description'
            value={newItem.description}
            onChange={(e) => {
              setNewItem({ ...newItem, description: e.target.value });
            }}
          ></input>
        </div>
      </div>
      <button
        className='bg-violet-500 hover:bg-violet-800 text-white rounded-3xl w-20 h-10 cursor-pointer transition-all'
        onClick={() => {
          if (!newItem.title) {
            return;
          } else {
            handleAdd(newItem);
          }
        }}
      >
        Add
      </button>
    </div>
  );
}
