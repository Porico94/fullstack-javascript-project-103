import formatPlain from "./formatObjectPlain.js";

const plainFormatter = (data, ancestry = "") => {
  //Array donde iremos agregando cada linea de código
  let list = [];

  for (let i = 0; i < data.length; i++) {
    //node representara cada objeto que recorremos
    const node = data[i];
    //Iremos creando la ruta acumulativamente
    const pathProperty = ancestry ? `${ancestry}.${node.key}` : node.key;
    //Si tiene children usamos recursividad y con el spread
    if (node.children) {
      list.push(...plainFormatter(node.children, pathProperty));
    }
    //Si tiene prefijo '-' y cumple varias condiciones entonces signfica que el nodo se actualizó.
    if (
      node.prefix === "-" &&
      i + 1 < data.length &&
      data[i + 1].key === node.key &&
      data[i + 1].prefix === "+"
    ) {
      list.push(
        `Property '${pathProperty}' was updated. From ${formatPlain(
          node.value
        )} to ${formatPlain(data[i + 1].value)}`
      );
      i++;
      continue;
    }
    //Si solo tiene prefijo '-' signfica que fue removido.
    if (node.prefix === "-") {
      list.push(`Property '${pathProperty}' was removed`);
      continue;
    }
    //Si solo tiene prefijo '+' significa que fue agregado.
    if (node.prefix === "+") {
      list.push(
        `Property '${pathProperty}' was added with value: ${formatPlain(
          node.value
        )}`
      );
      continue;
    }
    // Si el nodo tiene prefix " " (sin cambios), no mostramos nada en el formato plain
  }

  return list;
};

export default (data) => plainFormatter(data).join("\n");
