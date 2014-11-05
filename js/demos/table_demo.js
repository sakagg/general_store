$(function() {
  var table_1 = $('#table-1').dataTable ({
    "sAjaxSource": "./js/demos/table_data.json",
    "aoColumns": [
      { "mData": "wholesaler_name" },
      { "mData": "transportation_cost" }
    ],
    "fnInitComplete": function(oSettings, json) {
      $(this).parents ('.dataTables_wrapper').find ('.dataTables_filter input').prop ('placeholder', 'Table Search...').addClass ('form-control input-sm')
    }
  })
})