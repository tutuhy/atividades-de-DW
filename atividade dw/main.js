
const ipForm = document.getElementById("ipForm");
const inputIpAddress = document.getElementById("inputIpAddress");
const ipResults = document.getElementById("ipResults");


async function fetchIpInfo(ip) {
  try {
    
    const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,message,query,org,country,city`);
    const data = await response.json();

    
    if (data.status !== "success") {
      alert(`Erro: ${data.message}`);
      return;
    }

   
    addIpToTable(data);
  } catch (error) {
    console.error("Erro ao buscar informações do IP:", error);
    alert("Erro ao buscar informações do IP. Verifique sua conexão.");
  }
}


function addIpToTable(data) {
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>${data.query}</td>
    <td>${data.org || "N/A"}</td>
    <td>${data.country || "N/A"}</td>
    <td>${data.city || "N/A"}</td>
    <td>
      <button class="btn btn-danger btn-sm" onclick="removeRow(this)">Remover</button>
    </td>
  `;

  ipResults.appendChild(newRow);
}


function removeRow(button) {
  const row = button.parentElement.parentElement;
  ipResults.removeChild(row);
}


ipForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const ip = inputIpAddress.value.trim();
  if (ip) {
    fetchIpInfo(ip);
    inputIpAddress.value = ""; 
  }
});

