$(document).ready(function ()
{
// STEP MENU //

    // Init Objects
    var objHead;
    var objBaseCont;
    var objBase; 
    var iCh;
    var ObjF;

    function init_obj()
    {
        objHead = $("header");
        objBaseCont = $('#basecontainer');
        objBase = document.getElementsByClassName('base-inside')[0];
        iCh = objBase.children.length;
        ObjF = $("#footer");
    }

    // Event Handlers
    $(document).click(function (e)
    {
        init_obj();

        // The footer position
        FootPos(iFOOT);

        if (objBaseCont.is(e.target))
            obj_off();
    });

    // Activate one base
    function click_base()
    {
        $("div[toggle-this], a[toggle-this], button[toggle-this]").click(function ()
        {
            var objBut = $(this).attr("toggle-this");
            var objPanel = $("div[toggle-base='" + objBut + "']"); // var objPanel = $("div[toggle-this='" + objBut + "']");

            //// TODO Readout the val if not div from button
            //// if (objBut.indexOf("div") != 0) alert("No DIV > Href");

            objBut = $("div[toggled='" + objBut + "']");

            // Call the Toggle menu function
            de_select(objBut, objPanel);
        });
    }

    // Base All open or Close
    var iBaseTelr = 0;
    $(".all_open").click(function ()
    {
        init_obj();

        iBaseTelr++;
        if (iBaseTelr == 1){
            obj_on();
        }
        if (iBaseTelr == 2) {
            obj_off();
            iBaseTelr = 0;
        }
    });

    // Event Handling for show/hide basepanel
    function de_select(objOn, objPanel)
    {
        init_obj();

        var ObjToggld;
        for (i = 0; i < iCh; i++)
        {
            ObjToggld = objBase.children[i].getElementsByTagName('div');
            ObjToggPnl = objBase.children[i];

            for (j = 0, n = ObjToggld.length; j < n; j++)
            {
                if (ObjToggld[j].hasAttribute('toggled'))
                {
                    ObjToggld[j].className = "base-element hide";
                }
            }
            if (ObjToggPnl.hasAttribute('toggle-base'))
            {
                ObjToggPnl.className = "base-start b-hide";
            }

            if (objOn.hasClass("hide"))
            {
               objOn.removeClass("hide");
               objOn.addClass("show");
               //objOn.animate({
               //    height: "500"
               //}, 200);
            }
            if (objPanel.hasClass("b-hide"))
            {
                objPanel.removeClass("b-hide")
                objPanel.addClass("base-active");
            }
        }
    }

    // Hide basepanel
    function obj_off()
    {
        init_obj();

        var ObjToggld;
        for (i = 0; i < iCh; i++) {
            ObjToggld = objBase.children[i].getElementsByTagName('div');
            for (j = 0, n = ObjToggld.length; j < n; j++) {
                if (ObjToggld[j].hasAttribute('toggled')) {
                    ObjToggld[j].className = "base-element hide";
                }
            }
        }

        // The footer position
        FootPos(iFOOT);
    }

    // Show basepanel
    function obj_on()
    {
        init_obj();

        var ObjToggld;
        for (i = 0; i < iCh; i++) {
            ObjToggld = objBase.children[i].getElementsByTagName('div');
            for (j = 0, n = ObjToggld.length; j < n; j++) {
                if (ObjToggld[j].hasAttribute('toggled')) {
                    ObjToggld[j].className = "base-element show";
                }
            }
        }

        // The footer position
        FootPos(iFOOT);
    }

    // Array creation for the objects > from js on page > from code behind from Page_load() > from json object
    function make_divOutArray()
    {
        // Init 
        iNR = ArrDivInside.length;
        var ArrJson = JSON.parse(JSON.stringify(ArrDivInside));
        var strDivInside = "";

        var h2;
        var p;
        var a;
        var inptxt;
        var butt;
        var subline;
        var scndbutt;

        // Array from c# from json obj
        for (i = 0; i < iNR; i++)
        {
            // Readout h2
            if (ArrJson[i].h2 != "") {
                h2 = ArrJson[i].h2;
            }
            else {
                h2 = "";
            }

            // Readout p
            if (ArrJson[i].p != "") {
                p = ArrJson[i].p;
            }
            else {
                p = "";
            }

            // Readout a
            if (ArrJson[i].a[0] != "")
            {
                a = "";
                for (iA = 0, n = ArrJson[i].a.length; iA < n; iA++)
                {
                    aa = JSON.parse(ArrJson[i].a[iA]);
                        a += makeAnchor(aa.aname, aa.ahref);
                    aa = "";
                }
            }
            else {
                a = "";
            }

            // Readout the input text
            if (ArrJson[i].inpText[0] != "")
            {
                for (ii = 0, n = ArrJson[i].inpText.length; ii < n; ii++)
                    inptxt += makeInput(ArrJson[i].inpText[ii], ArrJson[i].inpText[ii]);
            }
            else {
                inptxt = "";
            }

            // Readout the button
            if (ArrJson[i].buttText[0] != "")
            {
                for (iii = 0, n = ArrJson[i].buttText.length; iii < n; iii++)
                {
                    bb = JSON.parse(ArrJson[i].buttText[iii]);
                        butt += makeButton(bb.btext, bb.btarg);
                    bb = "";
                }
            }
            else {
                butt = "";
            }
            // Readout the second button
            if (ArrJson[i].buttSecond[0] != "") {
                for (iii = 0, n = ArrJson[i].buttSecond.length; iii < n; iii++)
                    scndbutt += makeScndButton(ArrJson[i].buttSecond[iii], ArrJson[i].buttSecond[iii]);
            }
            else {
                scndbutt = "";
            }

            // Readout the BottomLine
            if (ArrJson[i].subLine[0] != "") {
                for (iiii = 0, n = ArrJson[i].subLine.length; iiii < n; iiii++)
                    subline += makeSubLine(ArrJson[i].subLine[iiii]);
            }
            else {
                subline = "";
            }

            strDivInside += makeDiv(i, h2, p, a, inptxt, butt, scndbutt, subline);
            h2 = "";
            p = "";
            a = "";
            inptxt = "";
            butt = "";
            scndbutt = "";
            subline = "";
            
        }
        $(".base-inside").html(strDivInside);
    }

    // Make the Div's from array
    function makeDiv(iTlr, h2, p, a, arrTxt, butt, scndbutt, subline)
    {
        var _subline = "";
        if (subline != "") _subline = "<div class='subline'>" + subline + "</div>";

        return "<div class='base-start b-hide' toggle-base='div" + iTlr + "'>" +
                "<h2><div toggle-this='div" + iTlr + "'>" + h2 + "</div></h2>" +
                "<div class='base-element hide' toggled='div" + iTlr + "'>" +
                "<p>" + p + "</p>" +
                a +
                arrTxt +
                "<p class='p-space'>&nbsp;</p>" +
                butt +
                "<p class='p-space'>&nbsp;</p>" +
                scndbutt +
                _subline +
                "</div></div>";
    }
    // Make an input type
    function makeInput(inSpan, inName)
    {
        return "<div class='div-inline'>" +
        "<span class='form-span'>" +
            inSpan +
        "</span>" +
        "<input class='form-in' type='text' name='" + inName.replace(' ', '') + "'></div>";
    }
    // Make an button type
    function makeButton(buttName, buttVal) {
        return "<div class='div-inline-4'>" +
        "<button toggle-this='" +
        buttVal +
        "' class='' value='" + buttName + "'>" +
            buttName + "</button>" +
        "</div>";
    }
    // Make a second button type
    function makeScndButton(buttName, buttVal) {
        return "<div class='div-inline-4'>" +
        "<button toggle-this='' class='btn-second' value='" + buttName + "'>" +
            buttVal + "</button>" +
        "</div>";
    }
    // make an Anchor
    function makeAnchor(_aname, _href)
    {
        return "<a name=" + _aname +
            " toggle-this='" + _href +
           // " href='" + _href + 
            "'>" + _aname +
            "</a><br/>";
    }
    // make SubLine at footer base
    function makeSubLine(_subline)
    {
        return "<a>" +
                _subline +
                "</a>";
    }

    // Functions calls at the end
    make_divOutArray();
    click_base();

// END STEP MENU //

    // Menu bar events
    function click_menuItem()
    {
        var objMenu = $(".ul-menu");
        var iCount = 0;
        $(".btn-menu").click(function ()
        {
            iCount++;
            // $(".ul-menu").toggle();
            if (iCount == 1) {
                objMenu.show(500);
            }
            if (iCount == 2)
            {
                objMenu.hide(500);
                iCount = 0;
            }
        });
    }

    // Function Calls
    click_menuItem();

    // Show hide input types
    function hide_inputTypes(obj)
    {
        var objDiv3 = $("[toggled='" + obj + "']")[0];
        var objChld;
        for (i = 0, n = objDiv3.children.length; i < n; i++)
        {
            if(objDiv3.children[i].children.length > 0)
            {
                for(j=0, nj=objDiv3.children[i].children.length;j<nj;j++)
                {
                    if (objDiv3.children[i].children[j].tagName == "INPUT")
                    {
                        objDiv3.children[i].children[j].className = "in-hide";
                    }
                }
            }
        }
    }
    hide_inputTypes("div3");

    function click_spanInput(obj) {
        $("div[toggled='" + obj + "'] .form-span").click(function () {
            var objFi = $("div[toggled='div3'] .form-in");
            var objiH = $("div[toggled='div3'] .in-hide");

            objiH.addClass("form-in");
            objiH.removeClass("in-hide");

            objFi.addClass("in-hide");
            objFi.removeClass("form-in");
        });
    }
    click_spanInput("div3");

    // Footer altijd onderaan
    var iFOOT = 20;
    function FootPos(iXtr)
    {
        init_obj();

        var iScreenH = $(window).height();
        var iDivH = (objBaseCont.height() + parseFloat(objBaseCont.css("margin-top")) + objHead.height() + iXtr);
        var iFPos = iDivH;

        ObjF.removeAttr("style");
        ObjF.css("position", "relative");
        if (iDivH < iScreenH)
        {
            ObjF.css({
                "position":"absolute",
                "bottom": 0
            });
        }
        else
        {
            ObjF.css({
                "position": "relative",
                "top": 0
            });
        }
    }

    // Call when load
    FootPos(iFOOT);

    // Call when resize
    $(window).on("resize", function () {
        FootPos(iFOOT);
    });
});

//// TODO Readout the val if not div from button