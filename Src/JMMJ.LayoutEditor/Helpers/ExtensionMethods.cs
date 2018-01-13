using System.Web.Mvc;
using System.Web.Mvc.Html;
using Umbraco.Core.Models;

namespace JMMJ.LayoutEditor.Helpers
{
    public static class ExtensionMethods
    {
        public static MvcHtmlString LayoutEditor(this HtmlHelper html, IPublishedContent model, string alias)
        {
            IPublishedProperty property = model.GetProperty(alias);

            if (property == null || !property.HasValue)
                return null;

            return html.Partial("LayoutEditor/_Layout", property.Value);
        }
    }
}