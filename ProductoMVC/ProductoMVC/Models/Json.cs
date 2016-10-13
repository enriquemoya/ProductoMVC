using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductoMVC.Models
{
    public class Json
    {
        public Producto[] productos { set; get; }
    }
    public class ReturnJson
    {
        public string status { set; get; }
        public string message { set; get; }
        public ReturnJson(string status, string message)
        {
            this.status = status;
            this.message = message;
        }
    }
}
