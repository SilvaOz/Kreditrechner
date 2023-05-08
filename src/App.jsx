import { useState, useEffect } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import { formatearDinero, calcularTotalPagar } from './helpers';

function App() {
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(12);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0);

  useEffect(() => {
    const resultadoTotalPagar = calcularTotalPagar(cantidad, meses);
    setTotal(resultadoTotalPagar);
  }, [cantidad, meses]);

  useEffect(() => {
    //calcular pago mensual
    setPago(total / meses);
  }, [total]);


  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  function handleChange(e) {
    setCantidad(+e.target.value);
  }

  function handleClickDecrement(e) {
    const value = cantidad - STEP;

    if (value < MIN) {
      alert('Not valid');
      return;
    }
    setCantidad(value);
  }
  function handleChange(e) {
    setCantidad(+e.target.value);
  }

  function handleClickIncrement(e) {
    const value = cantidad + STEP;

    if (value > MAX) {
      alert('Not valid');
      return;
    }
    setCantidad(value);
  }
  return (
    <div className="my-20 max-w-lg mx-auto bg-gray-50 shadow p-20">
      <Header />
      <div className='flex justify-between my-6'>

        <Button
          operador='−'
          fn={handleClickDecrement}
        />
        <Button
          operador='+'
          fn={handleClickIncrement} />
      </div>

      <input
        type="range"
        className='w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600'
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />

      <p className='text-center my-10 text-5xl font-extrabold text-blue-600'>{formatearDinero(cantidad)}
      </p>
      <h2 className=' text-2xl font-extrabold text-gray-500 text-center'>
        Bitte wählen Sie eine <span className='text-blue-600'>Zahlungsfrist  </span> aus
      </h2>

      <select
        className='mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500 '
        value={meses}
        onChange={e => setMeses(+e.target.value)}
      >
        <option value="6">6 Monate</option>
        <option value="12">12 Monate</option>
        <option value="24">24 Monate</option>

      </select>
      <div className='my-5 space-y-3 bg-gray-50 p-5'>
        <h2 className=' text-2xl font-extrabold text-gray-500 text-center'>
        Zusammenfassung <span className='text-blue-600'>der Zahlungen </span>
        </h2>

        <p className='text-xl text-gray-500 text-center font-bold'>{meses} Monate</p>
        <p className='text-xl text-gray-500 text-center font-bold'>{formatearDinero(total)} Gesamtbetrag zu zahlen</p>
        <p className='text-xl text-gray-500 text-center font-bold'>{formatearDinero(pago)} Monatliche Raten</p>

      </div>
    </div>

  )
}

export default App
