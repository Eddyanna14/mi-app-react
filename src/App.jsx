import { useState } from 'react'
import './App.css'
import fotoPerfil from './assets/tr.jpeg'

function App() {
  // Navegación
  const [pagina, setPagina] = useState('inicio')

  // Sumadora
  const [numero1, setNumero1] = useState('')
  const [numero2, setNumero2] = useState('')
  const [resultado, setResultado] = useState(null)

  // Traductor de números
  const [numeroTraducir, setNumeroTraducir] = useState('')
  const [numeroEnLetras, setNumeroEnLetras] = useState('')

  // Tabla de multiplicar
  const [numeroTabla, setNumeroTabla] = useState('')
  const [tabla, setTabla] = useState([])

  // FUNCIÓN SUMADORA
  const sumar = () => {
    if (numero1 === '' || numero2 === '') {
      setResultado('Debes ingresar los dos números')
      return
    }

    const suma = Number(numero1) + Number(numero2)
    setResultado(suma)
  }

  // FUNCIÓN PARA CONVERTIR NÚMEROS A LETRAS
  const convertirNumeroALetras = (numero) => {
    const unidades = [
      '',
      'uno',
      'dos',
      'tres',
      'cuatro',
      'cinco',
      'seis',
      'siete',
      'ocho',
      'nueve'
    ]

    const especiales = [
      'diez',
      'once',
      'doce',
      'trece',
      'catorce',
      'quince',
      'dieciséis',
      'diecisiete',
      'dieciocho',
      'diecinueve'
    ]

    const veintes = [
      'veinte',
      'veintiuno',
      'veintidós',
      'veintitrés',
      'veinticuatro',
      'veinticinco',
      'veintiséis',
      'veintisiete',
      'veintiocho',
      'veintinueve'
    ]

    const decenas = [
      '',
      '',
      '',
      'treinta',
      'cuarenta',
      'cincuenta',
      'sesenta',
      'setenta',
      'ochenta',
      'noventa'
    ]

    const centenas = [
      '',
      'ciento',
      'doscientos',
      'trescientos',
      'cuatrocientos',
      'quinientos',
      'seiscientos',
      'setecientos',
      'ochocientos',
      'novecientos'
    ]

    // Del 1 al 9
    if (numero < 10) {
      return unidades[numero]
    }

    // Del 10 al 19
    if (numero < 20) {
      return especiales[numero - 10]
    }

    // Del 20 al 29
    if (numero < 30) {
      return veintes[numero - 20]
    }

    // Del 30 al 99
    if (numero < 100) {
      const decena = Math.floor(numero / 10)
      const unidad = numero % 10

      if (unidad === 0) {
        return decenas[decena]
      }

      return `${decenas[decena]} y ${unidades[unidad]}`
    }

    // 100
    if (numero === 100) {
      return 'cien'
    }

    // Del 101 al 999
    if (numero < 1000) {
      const centena = Math.floor(numero / 100)
      const resto = numero % 100

      if (resto === 0) {
        return centenas[centena]
      }

      return `${centenas[centena]} ${convertirNumeroALetras(resto)}`
    }

    // 1000
    if (numero === 1000) {
      return 'mil'
    }

    return ''
  }

  // FUNCIÓN DEL BOTÓN CONVERTIR
  const traducirNumero = () => {
    const numero = Number(numeroTraducir)

    if (numeroTraducir === '') {
      setNumeroEnLetras('Debes ingresar un número')
      return
    }

    if (!Number.isInteger(numero) || numero < 1 || numero > 1000) {
      setNumeroEnLetras('Ingresa un número entero entre 1 y 1000')
      return
    }

    setNumeroEnLetras(convertirNumeroALetras(numero))
  }

  // FUNCIÓN TABLA DE MULTIPLICAR
  const generarTabla = () => {
    if (numeroTabla === '') {
      setTabla([])
      return
    }

    const numero = Number(numeroTabla)
    const nuevaTabla = []

    for (let i = 1; i <= 13; i++) {
      nuevaTabla.push({
        multiplicador: i,
        resultado: numero * i
      })
    }

    setTabla(nuevaTabla)
  }

  return (
    <div className="app">

      {/* ENCABEZADO */}
      <header className="encabezado">
        <h1>Mi Aplicación React</h1>
        <p>Introducción al Desarrollo de Aplicaciones Móviles</p>
      </header>

      {/* MENÚ */}
      <nav className="menu">

        <button
          className={pagina === 'inicio' ? 'activo' : ''}
          onClick={() => setPagina('inicio')}
        >
          🏠 Inicio
        </button>

        <button
          className={pagina === 'sumadora' ? 'activo' : ''}
          onClick={() => setPagina('sumadora')}
        >
          ➕ Sumadora
        </button>

        <button
          className={pagina === 'traductor' ? 'activo' : ''}
          onClick={() => setPagina('traductor')}
        >
          🔢 Números a Letras
        </button>

        <button
          className={pagina === 'tabla' ? 'activo' : ''}
          onClick={() => setPagina('tabla')}
        >
          ✖️ Tabla de Multiplicar
        </button>

        <button
          className={pagina === 'experiencia' ? 'activo' : ''}
          onClick={() => setPagina('experiencia')}
        >
          🎥 Mi Experiencia
        </button>

      </nav>

      {/* CONTENIDO */}
      <main className="contenido">

        {/* INICIO */}
        {pagina === 'inicio' && (
          <section className="inicio">

            <div className="presentacion">

              <div className="texto-presentacion">
                <p className="saludo">¡Hola! 👋</p>

                <h2>Soy Eddyanna Arias</h2>

                <p>
                  Esta aplicación fue desarrollada en React como parte
                  de mi práctica de Introducción al Desarrollo de
                  Aplicaciones Móviles.
                </p>
              </div>

              <img
                src={fotoPerfil}
                alt="Foto de Eddyanna Arias"
                className="foto"
              />

            </div>

            <div className="informacion">

              <h3>Mis datos</h3>

              <div className="dato">
                <span>Nombre</span>
                <p>Eddyanna</p>
              </div>

              <div className="dato">
                <span>Apellido</span>
                <p>Arias</p>
              </div>

              <div className="dato">
                <span>Correo electrónico</span>
                <p>EDDYANNAAP@GMAIL.COM</p>
              </div>

            </div>

          </section>
        )}

        {/* SUMADORA */}
        {pagina === 'sumadora' && (
          <section className="pagina">

            <h2>➕ Sumadora</h2>

            <p>
              Ingresa dos números y presiona el botón para obtener
              el resultado.
            </p>

            <div className="formulario">

              <label>Primer número</label>

              <input
                type="number"
                placeholder="Ejemplo: 10"
                value={numero1}
                onChange={(e) => setNumero1(e.target.value)}
              />

              <label>Segundo número</label>

              <input
                type="number"
                placeholder="Ejemplo: 5"
                value={numero2}
                onChange={(e) => setNumero2(e.target.value)}
              />

              <button
                className="boton-principal"
                onClick={sumar}
              >
                Sumar
              </button>

              {resultado !== null && (
                <div className="resultado">
                  <span>Resultado</span>
                  <strong>{resultado}</strong>
                </div>
              )}

            </div>

          </section>
        )}

        {/* NÚMEROS A LETRAS */}
        {pagina === 'traductor' && (
          <section className="pagina">

            <h2>🔢 Números a Letras</h2>

            <p>
              Ingresa un número entero del 1 al 1000 para mostrarlo
              escrito en letras.
            </p>

            <div className="formulario">

              <label>Número</label>

              <input
                type="number"
                min="1"
                max="1000"
                placeholder="Ejemplo: 125"
                value={numeroTraducir}
                onChange={(e) => setNumeroTraducir(e.target.value)}
              />

              <button
                className="boton-principal"
                onClick={traducirNumero}
              >
                Convertir a letras
              </button>

              {numeroEnLetras !== '' && (
                <div className="resultado">
                  <span>El número en letras es:</span>
                  <strong>{numeroEnLetras}</strong>
                </div>
              )}

            </div>

          </section>
        )}

        {/* TABLA DE MULTIPLICAR */}
        {pagina === 'tabla' && (
          <section className="pagina">

            <h2>✖️ Tabla de Multiplicar</h2>

            <p>
              Ingresa un número para generar su tabla de multiplicar
              desde el 1 hasta el 13.
            </p>

            <div className="formulario">

              <label>Número</label>

              <input
                type="number"
                placeholder="Ejemplo: 5"
                value={numeroTabla}
                onChange={(e) => setNumeroTabla(e.target.value)}
              />

              <button
                className="boton-principal"
                onClick={generarTabla}
              >
                Generar tabla
              </button>

              {tabla.length > 0 && (
                <div className="tabla-resultados">

                  <h3>Tabla del {numeroTabla}</h3>

                  {tabla.map((operacion) => (
                    <div
                      className="fila-tabla"
                      key={operacion.multiplicador}
                    >
                      <span>
                        {numeroTabla} × {operacion.multiplicador}
                      </span>

                      <strong>
                        = {operacion.resultado}
                      </strong>
                    </div>
                  ))}

                </div>
              )}

            </div>

          </section>
        )}

        {/* EXPERIENCIA */}
      {pagina === 'experiencia' && (
  <section className="pagina">

    <h2>🎥 Mi Experiencia</h2>

    <p>
      En este video comparto mi experiencia desarrollando esta aplicación
      en React, los retos que encontré durante el proceso y los conocimientos
      que pude adquirir con esta práctica.
    </p>

    <div className="video-contenedor">
      <iframe
        className="video-youtube"
        src="https://www.youtube.com/embed/LCOazvDZQ3s"
        title="Mi experiencia desarrollando una aplicación en React"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>

  </section>
)}

      </main>

      {/* PIE DE PÁGINA */}
      <footer>
        <p>Desarrollado por Eddyanna Arias</p>
      </footer>

    </div>
  )
}

export default App