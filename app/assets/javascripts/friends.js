/* global $ */ 
/* global show_spinner */
/* global hide_spinner */

var init_friend_lookup;

init_friend_lookup = function() {
  $('#friend-lookup-form').on('ajax:before', function(event, data, status){
    show_spinner();
  });
  
  $('#friend-lookup-form').on('ajax:after', function(event, data, status){
    hide_spinner();
  });
  
  $('#friend-lookup-form').on('ajax:success', function(event, data, status){
  //$('#friend-lookup-form').ajaxSuccess(function(event, data, status){
    // console.log(data)
    $('#friend_lookup').replaceWith(data);
    init_friend_lookup(); // start listing again since we replaced with new content
  });
  
  $('#friend-lookup-form').on('ajax:error', function(event, xhr, status, error){
    hide_spinner();
    $('#friend-lookup-results').replaceWith(' ');
    $('#friend-lookup-errors').replaceWith(
      "<div class='row col-md-10 text-danger' id='friend-lookup-errors'>Person was not found.</div>");
  });
};

$(document).ready(function(){
  init_friend_lookup(); // start lisining
});