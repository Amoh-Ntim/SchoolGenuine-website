const Navbar = () => {
  return (
    <div>
      <nav className="bg-ash text-ash p-4 flex justify-between">
        <div className="flex items-center">
          <div className="text-black font-bold text-lg">brandname</div>
        </div>
  
        <div className="flex items-center space-x-4">
          <a href="/" className="text-ash hover:text-blue-300">Home</a>
          <a href="/products" className="text-ash hover:text-blue-300">Product</a>
          <a href="/pricing" className="text-ash hover:text-blue-300">Pricing</a>
          <a href="/contact" className="text-ash hover:text-blue-300">Contact</a>
        </div>
  
        <div className="flex items-center">
          <div className=" bg-blue-700 h-80">
            <a href="/login" className="text-orange-400 hover:text-blue-300">Login</a>
            <button className="bg-orange-600 text-white py-2 px-4 rounded">Join Us</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar