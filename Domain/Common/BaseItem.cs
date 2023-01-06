using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Common
{
    public class BaseItem
    {
        public Guid ID { get; set; }
        public string Name { get; set; }
        public string Discription { get; set; }
    }
}
