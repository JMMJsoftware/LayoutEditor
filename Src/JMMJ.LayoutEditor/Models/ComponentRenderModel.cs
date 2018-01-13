using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.Security;
using Umbraco.Core.Configuration;
using Umbraco.Core.Models;
using Umbraco.Web;
using Umbraco.Web.Models;
using Umbraco.Web.Routing;

namespace JMMJ.LayoutEditor.Models
{
    public class ComponentRenderModel : IRenderModel
    {
        public IPublishedContent Content { get; set; }
        public ComponentModel Macro { get; set; }

        public ComponentRenderModel(IPublishedContent content = null)
        {
            Content = content != null ? content : new UmbracoHelper(UmbracoContext.Current).TypedContentAtRoot().FirstOrDefault();

            var baseUrl = HttpContext.Current.Request.Url.AbsoluteUri.Replace(HttpContext.Current.Request.Path, "/");
            var umbUrl = baseUrl + Content.Url.TrimStart('/');

            var pcr = new PublishedContentRequest(
                new Uri(umbUrl),
                UmbracoContext.Current.RoutingContext,
                UmbracoConfig.For.UmbracoSettings().WebRouting,
                s => Roles.Provider.GetRolesForUser(s)
            );

            UmbracoContext.Current.PublishedContentRequest = pcr;
            UmbracoContext.Current.PublishedContentRequest.PublishedContent = Content;

            pcr.Prepare();
        }
    }
}