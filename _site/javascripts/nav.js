/* Sample scripts for RWD nav patterns 
   (c) 2012 Maggie Wachs, Filament Group, Inc - http://filamentgroup.com/examples/rwd-nav-patterns/GPL-LICENSE.txt
   Last updated: March 2012
   Dependencies: jQuery
*/

   

jQuery(function($){
  $('body').addClass('nav-menu');
  
   $('.nav-primary')
      // toggle the menu items' visiblity
      .find('h3')
         .bind('click focus', function(){
            $(this).parent().toggleClass('expanded')
         });   

});