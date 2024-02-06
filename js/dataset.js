// JavaScript code to change table body based on dropdown selection
document.getElementById("option1").addEventListener("click", function () {
    changeTableBody("MYMENSINGH Division", ["যাবা", "বুজেছ", "সে", "হ্যাঁ", "হবে"]);
});

  document.getElementById("option2").addEventListener("click", function () {
    changeTableBody("DHAKA Division",["যাবা", "বুজেছ", "সে", "হ্যাঁ", "হবে"]);
  });
  document.getElementById("option3").addEventListener("click", function () {
    changeTableBody("RAJSHAHI Division",["যাবা", "বুজেছ", "সে", "হ্যাঁ", "হবে"]);
  });
  document.getElementById("option4").addEventListener("click", function () {
    changeTableBody("RANGPUR Division");
  });
  document.getElementById("option5").addEventListener("click", function () {
    changeTableBody("SYLHET Division",["যাবা", "বুজেছ", "সে", "হ্যাঁ", "হবে"]);
  });
  document.getElementById("option6").addEventListener("click", function () {
    changeTableBody("CHITTAGONG Division",["যাবা", "বুজেছ", "সে", "হ্যাঁ", "হবে"]);
  });
  document.getElementById("option7").addEventListener("click", function () {
    changeTableBody("BARISAL Division",["যাবা", "বুজেছ", "সে", "হ্যাঁ", "হবে"]);
  });
  document.getElementById("option8").addEventListener("click", function () {
    changeTableBody("KHULNA Division",["যাবা", "বুজেছ", "সে", "হ্যাঁ", "হবে"]);
  });

  function changeTableBody(content, data) {
    console.log("Data received:", data); // Debugging line
    // Select the table body
    var tableBody = document.querySelector("#myTable tbody");

    // Create rows for each data element
    var dataRows = data.map(function (item) {
        return `<td>${item}</td>`;
    }).join("");

    // Change the content of the table body
    tableBody.innerHTML = `
    <tr>
        <td>${content}</td>
    </tr>
    <tr>
        ${dataRows}
    </tr>
    `;
}
