using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ProductAPI.Models;
using System.Data;
using System.Linq;
using Microsoft.AspNetCore.Cors;

namespace ProductAPI.Controllers {

    [Route ("api/Product")]
    [ApiController]
    [EnableCors]
    public class ProductController : ControllerBase {

        [HttpGet("GetAllProducts")]
        public ActionResult<IEnumerable<Product>> GetAllProducts() {
           return JsonConvert.DeserializeObject<List<Product>>(System.IO.File.ReadAllText("Files/products.json"));   
        }

        [HttpGet("GetProductById/{id}")]
        public ActionResult<Product> GetProductById(int id) {
           return JsonConvert.DeserializeObject<IEnumerable<Product>>(System.IO.File.ReadAllText("Files/products.json")).FirstOrDefault(w=>w.ProductId == id);
        }
    }
}