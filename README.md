# 🏋️ EasyGym - Frontend

Interface web do sistema **EasyGym**, responsável por gerenciar treinos, frequência e presença de usuários em uma rotina de academia.

---

## 📌 Sobre o projeto

O **EasyGym** é uma aplicação voltada para organização de treinos.
Este repositório contém o **frontend**, onde o usuário pode:

* Visualizar sua frequência de treinos 📅
* Marcar presença ⏱️
* Criar, editar e excluir treinos 🏋️
* Adicionar exercícios com séries e repetições

---

## 🚀 Funcionalidades

### ✅ Tela inicial

* Saudação ao usuário
* Mensagem de boas-vindas

### 📅 Frequência de treino

* Exibição em formato de calendário
* Controle visual de dias treinados

### ⏱️ Registro de presença

* Mostra data e hora atual em tempo real
* Botão para marcar presença

### 🏋️ Gerenciamento de treinos

* Criar novos treinos
* Adicionar múltiplos exercícios
* Editar exercícios existentes
* Excluir treinos

---

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla)
* Font Awesome (ícones)

---

## 📂 Estrutura do projeto

```
frontend/
│
├── index.html
├── static/
│   ├── css/
│   │   └── index.css
│   ├── js/
│   │   ├── calendar.js
│   │   ├── hora.js
│   │   ├── modalMenu.js
│   │   └── form.js
│   └── images/
```

---

## ⚙️ Como executar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/easygym-frontend.git
```

2. Acesse a pasta do projeto:

```bash
cd easygym-frontend
```

3. Abra o arquivo `index.html` no navegador:

```bash
# Pode abrir direto ou usar extensão como Live Server
```

---

## 🔗 Integração com o backend

O frontend consome uma API local rodando em:

```
http://127.0.0.1:5000
```

### Endpoints utilizados:

* `GET /data/ler_treinos` → Buscar treinos
* `POST /data/salvar_treinos` → Criar treino
* `PUT /data/atualizar_treino/:id` → Atualizar exercício
* `DELETE /data/deletar_treino/:id` → Deletar treino

⚠️ **Importante:** O backend precisa estar rodando para o sistema funcionar corretamente.

---

## 🧠 Funcionalidades técnicas

* Manipulação dinâmica do DOM
* Uso de `fetch` para comunicação com API
* Criação dinâmica de formulários
* Atualização em tempo real da hora
* Interface interativa com modais

---

## 📄 Licença

Este projeto está sob a licença MIT.
