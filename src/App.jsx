
const Promo = (props) =>  {
  return <div className="promo_block">
    <div className="promo_img"/>
    <p className="promo_text">(props.text || "-")</p>
    </div>
}


const App = () => {
  return (
    <div>
      <h1>First Page</h1>
      <div>
      <Promo text="First"/>
      <Promo text="Second"/>
      <Promo text={4*10}/>
      <Promo />
      {promoData.map (el => <Promo text = {el}/>)}
      </div>
    </div>
  )
}

export default App;