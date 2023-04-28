import './App.css'

function App() {

	function ProductCard(){
		return(
			<div className='productCard'>
				<img src="https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ=s256-rw" alt="Producto" />
				<h1>Producto 1</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, neque. Suscipit quam praesentium accusantium debitis iusto quos vitae</p>
				<button>Comprar</button>
			</div>
		)
	}

  return (
  <>
		<h1>Hola Mundo</h1>
		<ProductCard />
	</>
  )
}

export default App
