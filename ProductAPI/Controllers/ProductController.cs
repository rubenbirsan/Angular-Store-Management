using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ProductAPI.Models;
using System.Data;
using System.Linq;

namespace ProductAPI.Controllers {

    [Route ("api/Product")]
    [ApiController]
    public class ProductController : ControllerBase {


        [HttpGet("GetAllProducts")]
        public ActionResult<IEnumerable<Product>> GetAllProducts() {
           return JsonConvert.DeserializeObject<List<Product>>(System.IO.File.ReadAllText("bin/products.json"));   
        }

        [HttpGet("GetProductById/{id}")]
        public ActionResult<Product> GetProductById(int id) {
           return JsonConvert.DeserializeObject<IEnumerable<Product>>(System.IO.File.ReadAllText("bin/products.json")).FirstOrDefault(w=>w.ProductId == id);
        }

    }
}