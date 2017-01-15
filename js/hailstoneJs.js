$(document).ready(function(){
    $('#men').click(function(){
        //window.location.href='https://www.google.co.in/?gfe_rd=cr&ei=FZl0WMrIKKbv8we24pOgAg';
        window.open('https://www.google.co.in/?gfe_rd=cr&ei=FZl0WMrIKKbv8we24pOgAg', '_blank');
    });

    $('#women').click(function(){
        //window.location.href='https://www.google.co.in/?gfe_rd=cr&ei=FZl0WMrIKKbv8we24pOgAg';
        window.open('https://www.google.co.in/?gfe_rd=cr&ei=FZl0WMrIKKbv8we24pOgAg', '_blank');
    });    

    $('.special.cards .image').dimmer({
        on: 'hover'
    });
});