<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="sdlayout.aspx.cs" Inherits="ScrollDownLayOut.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans:100,200,300" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charset="utf-8" />
    
    <script src="js/jquery-3.1.1.min.js"></script>
    <link href="css/scrollayout.css" rel="stylesheet" type="text/css" />
    <title>Differ Solutions - Jouw verzekering afsluiten</title>
</head>
<body>
    <header>
        <div class="logo_banner"></div>
    </header>
    <div id="wrapper">
        <div class="menu">
            <button class="btn-menu">|||</button>
            <ul class="ul-menu">
                <li class="show_base"><a toggle-this="div0">Welkom</a></li>
                <li class="show_base all_open">Show All Open</li>
            </ul>
        </div>
        <div id="basecontainer">
            <div class="base-inside">
            </div>

        </div>
    </div>
    <!-- Footer -->
        <footer id="footer">
                <div class="diff_footer_txt" align="center" >
                    <span class="bold">T:</span> 033 - 432 3370 <span class="bold"> 
                        <span class="foot_br"><p></p></span>
                        <span class="foot_ln bold"> - </span>
                        M:</span> <a href="mailto:info@differsolutions.nl">info@differsolutions.nl</a>
                        <span class="foot_br"><p></p></span>
                        &nbsp;  &copy; <a class="diff_copyr" href="http://www.web2design.nl/Website.aspx">DifferSolutions B.V.</a><br />
                        <p>&nbsp;</p>
                 </div>
        </footer>
    <script>
        var ArrDivInside = <%= strSerilize %>;
    </script>
    <script src="js/scrolllayout.js"></script>
</body>
</html>

<%--<a toggle-this="div1"><br>Maatschappij 1) uw Inboedelverzekering</a>--%>

                    <%--<div class='base-start' toggle-this='div1'>
                    <h2>Welkom en klik</h2>
                        <div class='base-element hide' toggled='div1'>
                            <input class='form-in' type='text' />
                        </div>
                    </div>--%>

                    <%--<div class="base-start" toggle-this="div8">
                    <h2>Welkom en klik</h2>
                                <div class='div-inline'>
                                    <span class='form-span'>naam</span>
                                    <input class='form-in' type='text'>
                                </div>
                                <div class='div-inline'>
                                    <span class='form-span'>naam</span>
                                    <input class='form-in' type='text'>
                                </div>

                    </div>--%>
