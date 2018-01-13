using JMMJ.LayoutEditor.Models;
using System.Linq;
using System.Web.Mvc;
using Umbraco.Web.Mvc;

namespace JMMJ.LayoutEditor.Controllers
{
    public class LayoutEditorController : SurfaceController
    {
        [HttpPost]
        public ActionResult RenderComponent(ComponentModel component)
        {
            if (!component.Parameters.Any())
                return null;

            return PartialView("LayoutEditor/_Component", 
                new ComponentRenderModel() { Macro = component });
        }
    }
}