const MenuCards = ({ item }: any) => {
  return (
    <article
      key={item.id}
      className='menu-item'
    >
      <img
        src={item.img}
        alt={item.title}
        className='photo'
      />
      <div className='item-info'>
        <header>
          <h4>{item.title}</h4>
          <h4 className='price'>${item.price}</h4>
        </header>
        <p className='item-text'>{item.desc}</p>
      </div>
      <footer>
        <a href={`index.html?idWithCategory=${item.id}`}>will it kill you?</a>
      </footer>
      <button
        className='save-btn'
        // onClick={() => saveToLocalStorage(item)}
      >
        Save to Local Storage
      </button>
    </article>
  )
}

export default MenuCards
