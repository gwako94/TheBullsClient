export default function ShopPage() {
  const products = [
    { id: 1, name: 'Home Jersey 2024/25', price: 'KES 4,500', category: 'Jerseys', stock: 'In Stock' },
    { id: 2, name: 'Away Jersey 2024/25', price: 'KES 4,500', category: 'Jerseys', stock: 'In Stock' },
    { id: 3, name: 'Training Kit', price: 'KES 3,200', category: 'Training', stock: 'In Stock' },
    { id: 4, name: 'Official Scarf', price: 'KES 800', category: 'Accessories', stock: 'In Stock' },
    { id: 5, name: 'Team Cap', price: 'KES 600', category: 'Accessories', stock: 'Limited' },
    { id: 6, name: 'Kids Jersey', price: 'KES 3,000', category: 'Kids', stock: 'In Stock' },
  ];

  return (
    <main className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-playfair mb-4">Official Shop</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Show your pride with official Isiolo City FC merchandise</p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-gold-500 mx-auto mt-6"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-square bg-gradient-to-br from-navy-100 to-navy-200 flex items-center justify-center text-6xl">
                  👕
                </div>
                <div className="p-6">
                  <div className="text-xs text-gray-500 font-semibold mb-1">{product.category}</div>
                  <h3 className="font-bold text-navy-950 mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold text-red-600">{product.price}</span>
                    <span className="text-xs text-green-600 font-semibold">{product.stock}</span>
                  </div>
                  <button className="w-full bg-navy-950 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
