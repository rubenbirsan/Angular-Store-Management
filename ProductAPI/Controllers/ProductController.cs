using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ProductAPI.Models;

namespace ProductAPI.Controllers {

    [Route ("api/Product")]
    [ApiController]
    public class ProductController : ControllerBase {

        [HttpGet ("GetAllProducts")]
        public ActionResult<IEnumerable<Product>> GetAllProducts () {
            return JsonConvert.DeserializeObject<List<Product>> (System.IO.File.ReadAllText ("Files/products.json")).OrderBy (w => w.ProductId).ToList ();

        }

        [HttpGet ("GetProduct/{id}")]
        public ActionResult<Product> GetProduct (int id) {
            var product = JsonConvert.DeserializeObject<IEnumerable<Product>> (System.IO.File.ReadAllText ("Files/products.json")).FirstOrDefault (w => w.ProductId == id);
            product.IsLast = JsonConvert.DeserializeObject<IEnumerable<Product>> (System.IO.File.ReadAllText ("Files/products.json"))
                .OrderByDescending (w => w.ProductId)
                .FirstOrDefault ().ProductId == id;

            product.IsFirst = JsonConvert.DeserializeObject<IEnumerable<Product>> (System.IO.File.ReadAllText ("Files/products.json"))
                .OrderBy (w => w.ProductId)
                .FirstOrDefault ().ProductId == id;

            return product;

        }

        [HttpPost ("CreateProduct")]
        public ActionResult<string> CreateProduct ([FromBody] Product product) {

            var products = JsonConvert.DeserializeObject<List<Product>> (System.IO.File.ReadAllText ("Files/products.json"));

            if (ModelState.IsValid) {

                product.ReleaseDate = DateTime.Now.ToString ("MMMM dd, yyyy");
                product.ImageUrl = "https://material.angularjs.org/latest/img/logo.svg";
                product.ProductId = products.OrderByDescending (w => w.ProductId).FirstOrDefault ().ProductId + 1;

                products.Add (product);

                var convertedJson = JsonConvert.SerializeObject (products, Formatting.Indented);

                try {
                    System.IO.File.WriteAllText ("Files/products.json", convertedJson);
                } catch {

                }
            }

            return "Product created";
        }

        [HttpPut ("UpdateProduct/{id}")]
        public ActionResult<string> UpdateProduct (int id, [FromBody] Product product) {

            var products = JsonConvert.DeserializeObject<List<Product>> (System.IO.File.ReadAllText ("Files/products.json"));
            var productFromList = products.FirstOrDefault (w => w.ProductId == id);
            var indexOfProduct = products.IndexOf (productFromList);

            if (ModelState.IsValid) {

                if (products[indexOfProduct].ProductId > 5) {
                    products[indexOfProduct].ProductName = product.ProductName;
                    products[indexOfProduct].ProductCode = product.ProductCode;
                    products[indexOfProduct].Price = product.Price;
                    products[indexOfProduct].StarRating = product.StarRating;

                    var convertedJson = JsonConvert.SerializeObject (products, Formatting.Indented);

                    try {
                        System.IO.File.WriteAllText ("Files/products.json", convertedJson);
                    } catch {

                    }
                }
            }

            return "Product updated";
        }

        [HttpDelete ("DeleteProduct/{id}")]
        public ActionResult<string> DeleteProduct (int id) {

            var products = JsonConvert.DeserializeObject<List<Product>> (System.IO.File.ReadAllText ("Files/products.json"));
            var productFromList = products.FirstOrDefault (w => w.ProductId == id);

            if (products.Count () > 5) {
                products.Remove (productFromList);
            }

            var convertedJson = JsonConvert.SerializeObject (products, Formatting.Indented);

            try {
                System.IO.File.WriteAllText ("Files/products.json", convertedJson);
            } catch {

            }

            return "Product deleted";
        }
    }
}