using System.Collections.Generic;

namespace JMMJ.LayoutEditor.Models
{
    public class ComponentModel
    {
        public string Alias { get; set; }
        public IDictionary<string, object> Parameters { get; set; }

        public ComponentModel() { }
    }
}