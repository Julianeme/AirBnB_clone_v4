$(document).ready(function () {
  let amty_id = {}
  if ($("input[type=checkbox]").prop(":checked")) {
    amty_id[$(this).data('id')] = $(this).data('name');
  }) else {
  delete amty_id[$(this).data('id')];
  })
}
