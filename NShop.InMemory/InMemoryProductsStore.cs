using NShop.Models;
using NShop.Persistence;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NShop.InMemory
{
    public class InMemoryProductsStore : IDataStore
    {
        public static InMemoryProductsStore DataStore = new InMemoryProductsStore();
        private static IEnumerable<Product> _products;

        public InMemoryProductsStore()
        {
            _products = new List<Product> {
                new Product(ProductUnit.Piece){
                    Id = 1,
                    Name = "Apple",
                    Description = "Delicious red apple",
                    Price = 12.5f,
                    Available = 10
                },
                new Product(ProductUnit.Dozen){
                    Id = 2,
                    Name = "Banana",
                    Description = "Sweet yellow bananas",
                    Price = 11f,
                    Available = 5
                }
            };
        }

        public Task<IEnumerable<Product>> AllProducts()
        {
            return Task.FromResult(_products);
        }

        public Task<Product> ProductById(int id)
        {
            return Task.FromResult(_products.Where(p => p.Id == id).FirstOrDefault());
        }
    }
}
