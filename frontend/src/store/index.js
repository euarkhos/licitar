import { createStore } from 'vuex'
import auth from './modules/auth'
import licitacoes from './modules/licitacoes'
import documentos from './modules/documentos'
import analises from './modules/analises'

export default createStore({
  modules: {
    auth,
    licitacoes,
    documentos,
    analises
  }
})
