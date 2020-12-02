/*---- FUNÇÃO PARA EXIBIR OS ITENS DO MENU HAMBURGUER ----*/
$(function () {
    $("#checkbox-menu").click(function () {
        if ($(this).is(":checked")) {
            $("#menu-checked").first().fadeIn( "slow" );;
        } else {
            $("#menu-checked").hide();
        }
    });
});