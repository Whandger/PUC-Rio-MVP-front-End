//##################################
//### FUNÇÃO REGISTRAR PRESENÇA  ###
//##################################

function hora() {
  const hora = document.querySelector('.hora');
  const agora = new Date();

  const diaSemana = agora
    .toLocaleDateString("pt-BR", { weekday: "short" })
    .replace(".", ""); // remove ponto se vier "qui."

  const data = agora.toLocaleDateString("pt-BR");
  
  const horas = agora.getHours().toString().padStart(2, "0");
  const minutos = agora.getMinutes().toString().padStart(2, "0");

  hora.innerText = `${diaSemana} ${data} ${horas}:${minutos}`
  };


// executa imediatamente ao carregar
document.addEventListener("DOMContentLoaded", function () {
  hora();

  setInterval(hora, 1000);
  
  });


  