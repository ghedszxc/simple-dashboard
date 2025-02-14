export default function useGlobal() {
  const formRules = {
    requiredField: [
      value => {
        if (value) return true
        return 'This field is required.'
      }
    ]
  }

  const itemsPerPage = 10;

  const tableActions = [
    {
      text: 'Update',
      icon: 'mdi-pencil',
      color: 'warning'
    },
    {
      text: 'Delete',
      icon: 'mdi-delete',
      color: 'error'
    },
  ]

  function formatDate(date) {
    let formatDate = new Date(date)
    let month = formatDate.getMonth() + 1; // Months are zero-based
    let day = formatDate.getDate();
    let year = formatDate.getFullYear();

    let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    // Add leading zero to month and day if they are single digits
    // if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    
    return `${months[month+1]} ${day}, ${year}`;
  }

  return {
    formRules,
    itemsPerPage,
    tableActions,
    
    formatDate,
  };
}
