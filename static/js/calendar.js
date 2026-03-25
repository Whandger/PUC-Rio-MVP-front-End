
//##################################
//###   FUNÇÂO DO CANLENDARIO    ###
//##################################
  
  window.onload = function() { 
    function renderCalendario() {
      const hoje = new Date();
      const diasSemana = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];
    
      const segunda = new Date(hoje);
      const diaSemana = hoje.getDay() === 0 ? 7 : hoje.getDay();
      segunda.setDate(hoje.getDate() - diaSemana + 1);
    
      const container = document.getElementById('frequencia');
    
      let conteudo = '';
    
      for (let i = 0; i < 7; i++) {
        const data = new Date(segunda);
        data.setDate(segunda.getDate() + i);
    
        const isHoje =
          data.getDate() === hoje.getDate() &&
          data.getMonth() === hoje.getMonth() &&
          data.getFullYear() === hoje.getFullYear();
    
        const dataFormatada =
          String(data.getDate()).padStart(2, '0') + '/' +
          String(data.getMonth() + 1).padStart(2, '0');
    
        // Alternância de cores
        const corFundo = isHoje
          ? '#3588d4'
          : (i % 2 === 0 ? '#e5e7eb' : '#d1d5db'); 
    
        conteudo += `
          <div style="
            background-color: ${corFundo};
            width: 11%;
            height: 100%;
            text-align: center;
            padding: 4px;
            font-weight: ${isHoje ? 'bold' : 'normal'};
            color: ${isHoje ? '#ffffff' : '#374151'};
          ">
            <p style="font-size: 14px; margin:0;">
              ${diasSemana[i]}<br>
              ${dataFormatada}
            </p>
          </div>
        `;
      }
    
      container.innerHTML = conteudo;
    }
    
    renderCalendario();
  }