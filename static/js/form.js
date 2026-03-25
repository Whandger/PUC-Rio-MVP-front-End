document.addEventListener("DOMContentLoaded", function () {
  buscarTreinos();
  //##################################
  //###       VARIÁVEIS            ###
  //##################################

  const modalTreino = document.getElementById("modalTreinos");
  const nomeTreinoInput = document.querySelector("[name='nomeTreino']");
  const salvarTreino = document.getElementById("salvarTreino");
  const container = document.getElementById("listaExercicios");
  const addExercicioBtn = document.getElementById("addExercicio");
  const cancelarBtn = document.getElementById("cancelar");
  const formTreino = document.getElementById("formTreino");
  const botaoAbrirForm = document.getElementById("abrirForm");

  //##################################
  //###   CRIAR LINHA DE EXERCÍCIO ###
  //##################################

  function criarLinhaExercicio() {
    const linha = document.createElement("div");
    linha.className = "linha-exercicio";
    linha.innerHTML = `
        <input type="text" name="exercicio[]" placeholder="Exercício" required>
        <input type="number" name="series[]" placeholder="Séries" required>
        <input type="number" name="reps[]" placeholder="Reps" required>
    `;

    return linha;
  }

  //##################################
  //### MOSTRA OS TREINOS NO MODAL ###
  //##################################

  function mostrarTreinosNaTela(treinos) {
    modalTreino.querySelectorAll(".treino-card").forEach((div) => div.remove());

    treinos.forEach((treino) => {
      // Cria a div dos treinos
      const divTreino = document.createElement("div");
      divTreino.className = "treino-card";
      divTreino.dataset.id = treino.id;

      // Cabecalho pré-modal
      const divCabecalho = document.createElement("div");
      divCabecalho.className = "cabecalho";
      divCabecalho.innerHTML = `
            <span style="word-break: break-word;overflow-wrap: break-word;">${treino.nome}</span>
            <span style="background-color:#3498db;color:white;padding:3px 10px;border-radius:15px;font-size:12px;">
                ${treino.exercicios.length} exercícios
            </span>
        `;
      // Cria a div de linha de cima da tabela
      const divExercicios = document.createElement("div");
      divExercicios.className = "exercicios-card";
      divExercicios.style.display = "none";

      const header = document.createElement("div");
      header.style.cssText = `
            display:grid;
            grid-template-columns:2fr 1fr 1fr 1fr;
            gap:10px;
            padding:8px;
            background-color:#34495e;
            color:white;
            margin-bottom:5px;
            font-weight:bold;
        `;
      header.innerHTML = `
            <span style="width:10px;">Exercício</span>
            <span style="justify-self:center;align-self:center;">Séries</span>
            <span style="justify-self:center;align-self:center;">Reps</span>
            <span style="justify-self:center;align-self:center;"></span>
        `;

      divExercicios.appendChild(header);

      // Cria a div de linha dos exercicios
      treino.exercicios.forEach((ex) => {
        const divEx = document.createElement("div");
        divEx.className = "divExRow";
        divEx.style.cssText = `
                display:grid;
                grid-template-columns:2fr 1fr 1fr 1fr;
                gap:10px;
                padding:8px;
                border-bottom:1px solid #eee;
            `;

        divEx.innerHTML = `
                <span style="word-break: break-word;overflow-wrap: break-word;">${ex.nome_exercicio}</span>
                <span style="align-items:center;display:flex;justify-content:center">${ex.series}</span>
                <span style="align-items:center;display:flex;justify-content:center">${ex.repeticoes}</span>
                <img
                    class='editBtn' 
                    src='../static/images/lapis.png'
                    style='
                    width:20px;
                    padding:0px 19px;
                    display:flex;
                    justify-self:center;
                    align-self:center;
                    filter: contrast(0.4);'
                    ></img>
                `;

        // Função Click lapis / extração de data-id / criação de inputs
        divEx.dataset.id = ex.id;
        divExercicios.appendChild(divEx);

        const pencilDelete = divEx.querySelector(".editBtn");

        pencilDelete.addEventListener("click", function () {
          const DivIdExercicios = this.closest(".divExRow");
          idExercicio = DivIdExercicios.dataset.id;

          // cria o input
          const inputExercicio = document.createElement("div");
          inputExercicio.className = "inputExercicio";
          inputExercicio.style.cssText = `
            display:grid;
            grid-template-columns:2fr 1fr 1fr 1fr;
            gap:10px;
            padding:8px;
            border-bottom:1px solid #eee;
        `;
          inputExercicio.innerHTML = `
            <input
            name="exercicio[]"
            class="nomeExercicioEdit"
            type="text"
            placeholder="Exercicio"
            required
            style="
            width:92px;
            color: blue;
            ">

            <input
            name="series[]"
            class="serieEdit"
            type="number"
            placeholder="Series"
            required
            style="
            width:50px;
            justify-self:center;
            text-align:center;
            color: blue;
            ">

            <input
            name="reps[]"
            class="repsEdit"
            type="number"
            placeholder="Reps"
            required
            style="
            width:40px;
            justify-self:center;
            text-align:center;
            color: blue;
            ">

            <img
            class='save_exercicio' 
            src='../static/images/disk_icon.svg'
            style='
            width:20px;
            padding:0px 19px;
            display:flex;
            justify-self:center;
            align-self:center;
            filter: contrast(0.4);'
            ></img>
            `;

          // substitui a linha pelo input
          DivIdExercicios.replaceWith(inputExercicio);

          const saveExercicio = inputExercicio.querySelector(".save_exercicio");

          saveExercicio.addEventListener("click", function () {
            const nome_exercicio = inputExercicio
              .querySelector("[name='exercicio[]']")
              .value.trim();
            const serie = inputExercicio
              .querySelector("[name='series[]']")
              .value.trim();
            const repeticao = inputExercicio
              .querySelector("[name='reps[]']")
              .value.trim();

            const exerciciosAtualizar = {
              nome_exercicio,
              serie,
              repeticao,
            };

            atualizar_treino(idExercicio, exerciciosAtualizar);
          });
        });
      });

      // Cria a div Footer
      const footer = document.createElement("div");
      footer.style.cssText = `
            display:grid;
            height:25px;
            color:white;
            font-weight:bold;
            padding: 8px;
            grid-template-columns:2fr 1fr 1fr 1fr;
        `;
      footer.innerHTML = `
            <img
            class='deleteBtn' 
            src='../static/images/trash_icon.svg'
            style='
            width:20px;
            grid-column:4;
            align-self:center;
            justify-self:center;
            filter: contrast(0.4);'
            ></img>
        `;

      divExercicios.appendChild(footer);

      // Evento de click do botão deletar treino
      const imgDelete = footer.querySelector(".deleteBtn");

      imgDelete.addEventListener("click", function () {
        const treinoCard = this.closest(".treino-card");
        const idTreino = treinoCard.dataset.id;

        ask = confirm("Deseja excluir?");
        if (ask == true) {
          delete_treino(idTreino);
        } else {
          console.log("Não excluido");
        }
      });

      //evento de abrir e fechar modal
      divCabecalho.addEventListener("click", function (e) {
        e.stopPropagation();

        const aberto = divExercicios.style.display !== "none";

        divExercicios.style.display = aberto ? "none" : "block";
        divCabecalho.style.backgroundColor = aberto ? "#f9f9f9" : "#e9e9e9";
        divCabecalho.style.borderBottom = aberto ? "none" : "1px solid #3498db";
        divCabecalho.style.borderRadius = aberto ? "10px" : "10px 10px 0 0";
      });

      divTreino.appendChild(divCabecalho);
      divTreino.appendChild(divExercicios);

      modalTreino.insertBefore(
        divTreino,
        modalTreino.querySelector(".adicionarTreino").nextSibling,
      );
    });
  }

  //##################################
  //### FUNÇÕES ABRIR/FECHAR FORM  ###
  //##################################

  botaoAbrirForm.addEventListener("click", function () {
    botaoAbrirForm.style.display = "none";
    formTreino.style.display = "block";
  });

  cancelarBtn.addEventListener("click", function () {
    formTreino.reset();
    resetExercicios();
    formTreino.style.display = "none";
    botaoAbrirForm.style.display = "flex";
  });

  function resetExercicios() {
    container.innerHTML = "";
    container.appendChild(criarLinhaExercicio());
  }

  addExercicioBtn.addEventListener("click", function () {
    container.appendChild(criarLinhaExercicio());
  });

  //##################################
  //###   BUSCAR TREINO NO BACK    ###
  //##################################

  async function buscarTreinos() {
    try {
      const response = await fetch("http://127.0.0.1:5000/data/ler_treinos", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      if (data.success) {
        mostrarTreinosNaTela(data.data);
      } else {
        console.error("Erro:", data.error);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  }

  //##################################
  //###       EXCLUIR TREINO       ###
  //##################################
  async function delete_treino(id) {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/data/deletar_treino/${id}`,
        {
          method: "DELETE",
          credentials: "omit",
        },
      );

      // Atualiza a tela quando deletado
      if (response.ok) {
        document.querySelector(`.treino-card[data-id="${id}"]`).remove();
      } else {
        console.error("Deletion failed with status:", response.status);
      }
    } catch (error) {
      console.error("Network or other error:", error);
    }
  }

  //##################################
  //###      SALVAR TREINO         ###
  //##################################
  salvarTreino.addEventListener("click", function (event) {
    event.preventDefault();

    const nomeTreino = nomeTreinoInput.value.trim();
    if (!nomeTreino) {
      alert("Informe o nome do treino.");
      return;
    }

    const linhas = container.querySelectorAll(".linha-exercicio");
    const exerciciosSalvar = [];

    linhas.forEach((linha) => {
      const nomeTreino = nomeTreinoInput.value.trim();
      const nomeExercicio = linha
        .querySelector("[name='exercicio[]']")
        .value.trim();
      const serie = linha.querySelector("[name='series[]']").value.trim();
      const repeticoes = linha.querySelector("[name='reps[]']").value.trim();

      if (nomeExercicio) {
        exerciciosSalvar.push({ nomeExercicio, serie, repeticoes });
      }
    });

    if (exerciciosSalvar.length === 0) {
      alert("Adicione pelo menos um exercício.");
      return;
    }

    const novoRegistro = { nome: nomeTreino, exercicios: exerciciosSalvar };
    console.log(novoRegistro);

    fetch("http://127.0.0.1:5000/data/salvar_treinos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "omit",
      body: JSON.stringify(novoRegistro),
    })
      .then(async (response) => {
        if (response.status === 409) {
          const data = await response.json();
          alert(data.error);
          return null;
        }
        if (!response.ok) {
          const text = await response.text();
          throw new Error(`Erro HTTP ${response.status}: ${text}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!data) return;
        if (data.success) {
          formTreino.reset();
          resetExercicios();
          formTreino.style.display = "none";
          botaoAbrirForm.style.display = "flex";
          buscarTreinos();
        }
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
        alert("Erro ao salvar treino.");
      });
  });
  //##################################
  //###     ATUALIZAR TREINO       ###
  //##################################
  async function atualizar_treino(idExercicio, exerciciosAtualizar) {
    const response = await fetch(
      `http://127.0.0.1:5000/data/atualizar_treino/${idExercicio}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(exerciciosAtualizar),
      },
    );

    const data = await response.json();

    if (data.success) {
      buscarTreinos();
    } else {
      console.error("Erro ao atualizar:", data.error);
    }
  }
});
