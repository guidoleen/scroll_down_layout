using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ScrollDownLayOut.Model
{
    public class StepMaker
    {
        public string h2 { get; set; }
        public string p { get; set; }
        public string[] a { get; set; }
        public string[] inpText { get; set; }
        public string[] buttText { get; set; }
        public string[] subLine { get; set; }
        public string[] buttSecond { get; set; }

        public StepMaker(string _h2, string _p, string[] _a, string[] _inpText, string[] _buttText, string[] _subLine, string[] _buttSecond)
        {
            this.h2 = _h2;
            this.p = _p;
            this.a = _a;
            this.inpText = _inpText;
            this.buttText = _buttText;
            this.subLine = _subLine;
            this.buttSecond = _buttSecond;
        }
    }
}