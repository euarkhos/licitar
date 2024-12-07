# Licitapp

Sistema modular para gestão e acompanhamento de licitações.

## Estrutura do Projeto

O projeto está dividido em dois principais componentes:

- `frontend/`: Interface do usuário desenvolvida em Vue.js
- `backend/`: API REST desenvolvida em Django

## Requisitos

### Frontend
- Node.js >= 16
- Vue.js 3
- Vuex
- Vue Router
- Tailwind CSS

### Backend
- Python >= 3.8
- Django 4.x
- Django REST Framework
- PostgreSQL

## Configuração do Ambiente

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## Funcionalidades Principais

- Gestão de licitações
- Upload e gerenciamento de documentos
- Análise de resultados
- Notificações em tempo real
- Geração de relatórios
- Integração com APIs governamentais

## Estrutura de Módulos

- Acompanhamento de Licitações
- Gestor de Documentação
- Análise de Resultados
- Inteligência Artificial e Previsões
- Compliance

## Licença

Este projeto está sob a licença MIT.
