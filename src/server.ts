import express from 'express'
import { Router, Request, Response } from 'express';
import { projecaoEconomia } from './services/projecaoEconomia';
import { calculaMediaConsumo } from './services/calculaMediaConsumo';
import { TCostumer } from './types/CostumerType';
import { analisaTipoConexao } from './services/analisaTipoConexao';
import { razoesDeInelegibilidade } from './services/razoesDeInelegibilidade';

const app = express();
const route = Router()
app.use(express.json())

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Teste - Backend Lemon - Elegibilidade' })
})


app.post('/api/novoCliente', (req, res) => {
  const newCostumer: TCostumer = <TCostumer>req.body

  const mediaConsumo = calculaMediaConsumo(newCostumer.historicoDeConsumo);
  const consumoElegive: any[] = analisaTipoConexao(newCostumer.tipoDeConexao, mediaConsumo)
  const razoesInelegibilidade = razoesDeInelegibilidade(newCostumer.classeDeConsumo, newCostumer.modalidadeTarifaria)

  if (razoesInelegibilidade[0] === true && razoesInelegibilidade[1] === true && consumoElegive[0] === true) {
    const projection = projecaoEconomia(mediaConsumo)
    res.status(200).json({
      "elegivel": true,
      "economiaAnualDeCO2": projection,
    })
  } else {
    res.status(201).json({
      "elegivel": false,
      "razoesDeInelegibilidade": razoesInelegibilidade[2]
    })
  }
})

app.use(route)

app.listen(3333, () => 'server running on port 3333')

export default app 
