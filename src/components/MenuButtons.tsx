const MenuButtons = ({ cat, setCategory }: any) => {
  return (
    <button
      key={cat}
      type='button'
      className='filter-btn'
      onClick={() => setCategory(cat)}
    >
      {cat}
    </button>
  )
}

export default MenuButtons
