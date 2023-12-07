// 1. Crear un array que contenga las operaciones bancarias realizadas por el cliente,
// tomando en cuenta que los depósitos serán representados por valores positivos y
// los retiros por valores negativos.
const operacionesBancarias = [
    10000,
    5500,
    -5000,
    -10000,
  ];
  
  // 2. Crear una función (Callback) que reciba como parámetro el array creado. La función
  // tendrá la responsabilidad de calcular y devolver el saldo total de depósitos, el saldo
  // actual de retiros y el saldo actual del cliente.
  function calcularSaldo(operacionesBancarias) {
    // Obtener el saldo total de depósitos
    let saldoDepositos = 0;
    for (const operacionBancaria of operacionesBancarias) {
      if (operacionBancaria >= 0) {
        saldoDepositos += operacionBancaria;
      }
    }
  
    // Obtener el saldo total de retiros
    let saldoRetiros = 0;
    for (const operacionBancaria of operacionesBancarias) {
      if (operacionBancaria < 0) {
        saldoRetiros += operacionBancaria;
      }
    }
  
    // Obtener el saldo actual
    let saldoActual = saldoDepositos + saldoRetiros;
  
    return {
      saldoDepositos,
      saldoRetiros,
      saldoActual,
    };
  }
  
  // 3. Crear otra función que reciba como parámetros el nombre y el apellido del cliente así
  // como el array que contiene las operaciones bancarias. Esta función tendrá la
  // responsabilidad de retornar el nombre y apellido del cliente y el saldo total de
  // depósitos, el saldo actual de retiros y el saldo actual.
  function mostrarSaldo(nombre, apellido, operacionesBancarias) {
    const saldo = calcularSaldo(operacionesBancarias);
  
    console.log(`
  Estimada ${nombre} ${apellido}:
  
  El monto total de los depósitos es de: ${saldo.saldoDepositos}
  El monto total de los retiros es de: ${saldo.saldoRetiros}
  Por lo tanto, su saldo actual en la cuenta es de: ${saldo.saldoActual}
  `);
  }
  
  // Invocar a la segunda función, asignando diferentes valores o argumentos.
  mostrarSaldo('Gloria', 'Medina', operacionesBancarias);