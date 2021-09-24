$(document).ready(function () {
  let amty_id = {}
  if ($("input[type=checkbox]").prop(":checked")) {
    amty_id.append($(this).find('li'))

    $($('.advancedSearchCheckBoxList')).each(function () {// id of ul
      var li = $(this).find('li')//get each li in ul
      li.each(function () {// id of ul
        labels.push($(this).text())
      })
    })

  else 
  }
  input type = "checkbox"// Your code goes here
});
