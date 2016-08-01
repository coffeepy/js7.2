function hideOddRows(){
  rows = document.getElementsByTagName('tr');
  for (var iCtr = 0; iCtr < rows.length; iCtr++) {
    if (iCtr % 2 ==  0) {
      odd_row = rows[iCtr];
      odd_row.style.display = 'none';
    };
  };
};
document.getElementById('hideBtn').addEventListener('click', hideOddRows);
