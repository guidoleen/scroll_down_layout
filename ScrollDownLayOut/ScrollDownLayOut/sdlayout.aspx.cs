using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ScrollDownLayOut
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        public string strSerilize;

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                 //Serialize to Json
                 strSerilize = (new JavaScriptSerializer()).Serialize(stepMake());
            }
        }

        private List<Model.StepMaker> stepMake()
        {
            List<Model.StepMaker> stMkr = new List<Model.StepMaker>
            {
                new Model.StepMaker("Welkom", "Stel hier jouw polis samen en kijk of je voordeliger uit bent... ", new string[] { "{\"aname\":\"Inboedelverzekering DeltaLoyd)\", \"ahref\":\"div1\"}", "{\"aname\":\"Sluit direct af)\", \"ahref\":\"div2\"}" }, new string[] { "" }, new string[] { "" }, new string[] { "" }, new string[] { "" }),
                new Model.StepMaker("Wie verzekeren?", "",  new string[] { "" }, new string[] { "Naam", "Achternaam", "Straat", "Postcode", "Telefoon" }, new string[] { "{\"btext\":\"Bereken premie\", \"btarg\":\"div2\"}" }, new string[] { "" }, new string[] { "Bewaar voor later","Kies ander product","Sluit" }),
                new Model.StepMaker("Direct Berekenen", "", new string[] { "" }, new string[] { "Verzekerde waarde", "Straat van het Huis", "Plaats", "Postcode" }, new string[] { "{\"btext\":\"Sluit nu af\", \"btarg\":\"div3\"}" }, new string[] { "" }, new string[] { "Bewaar voor later","Kies ander product","Sluit" }),
                new Model.StepMaker("Aanpassen en Afsluiten", "", new string[] { "" }, new string[] { "Piet", "Janssen", "Voorstraat 25", "3030 AA", "065555555", "15.000", "Achter het plein 5", "Huizen", "4040 AA" }, new string[] { "{\"btext\":\"Sluit 'm nu af\", \"btarg\":\"div4\"}" }, new string[] { "" }, new string[] { "Bewaar", "Sluit" }),
                new Model.StepMaker("Bewaren", "Gelukt! De verzekering is afgesloten. <br>Je kunt hier kiezen om de polis bladen te downloaden...", new string[] { "" }, new string[] { "" }, new string[] { "{\"btext\":\"Pdf\", \"btarg\":\"div0\"}", "{\"btext\":\"Csv\", \"btarg\":\"div0\"}", "{\"btext\":\"Naar Email\", \"btarg\":\"mailto:bla@bla.nl\"}" }, new string[] { "" }, new string[] { "" })
            };

            return stMkr;
        }
    }
}