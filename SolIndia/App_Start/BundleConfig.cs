using System.Web;
using System.Web.Optimization;

namespace SolIndia
{
    public class BundleConfig
    {
        // Para obtener más información sobre Bundles, visite http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/contact").Include(
                        "~/Scripts/Home/contact.js"));

            bundles.Add(new ScriptBundle("~/bundles/index").Include(
                        "~/Scripts/index.js"));

            bundles.Add(new ScriptBundle("~/bundles/gallery").Include(
                "~/Scripts/gallery/gallery.js",
                "~/Scripts/gallery/jquery.easing.1.3.js",
                "~/Scripts/gallery/jquery.elastislide.js",
                "~/Scripts/gallery/jquery.tmpl.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/products").Include(
                        "~/Scripts/Home/products.js"));

            bundles.Add(new ScriptBundle("~/bundles/textillate").Include(
                "~/Scripts/textillate/assets/jquery.fittext.js",
                "~/Scripts/textillate/assets/jquery.lettering.js",
                "~/Scripts/textillate/jquery.textillate.js"));

            bundles.Add(new ScriptBundle("~/bundles/layout").Include(
                        "~/Scripts/Shared/layout.js"));

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/jquery-{version}.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                "~/Scripts/jquery/jquery-ui.min.js"));


            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Utilice la versión de desarrollo de Modernizr para desarrollar y obtener información. De este modo, estará
            // preparado para la producción y podrá utilizar la herramienta de compilación disponible en http://modernizr.com para seleccionar solo las pruebas que necesite.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap-social.css",
                      "~/Content/font-awesome.min.css",
                      "~/Content/gallery/style.css",
                      "~/Content/gallery/elastislide.css",
                      "~/Content/textillate/assets/animate.css",
                      "~/Content/jquery/jquery-ui.css",
                      "~/Content/jquery/jquery-ui.structure.min.css",
                      "~/Content/jquery/jquery-ui-theme.min.css",
                      "~/Content/bootstrap-theme.css",
                      "~/Content/site.css"));

        }
    }
}
