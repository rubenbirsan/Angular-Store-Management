using System;
using Newtonsoft.Json;

namespace ProductAPI.Models {
    public class Product {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductCode { get; set; }

        public string ReleaseDate { get; set; }

        [JsonIgnore]
        public DateTime? ReleaseDt { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public decimal StarRating { get; set; }
        public string ImageUrl { get; set; }
    }
}