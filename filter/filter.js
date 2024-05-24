$(document).ready(function() {

    let $form = $('.toggles');
    
    function toggleColumn(event) {
      let $checkbox = $(event.target);
      let value = $checkbox.val();
      let $target = $(`.${value}`);
      if ($checkbox.is(':checked')) {
        $target.addClass('show');
      } else {
        $target.removeClass('show');
      }
    }
    
    $form.on('change', toggleColumn);
  
  });