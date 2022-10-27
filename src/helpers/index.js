// generador de id
export const generateId = () =>
  Math.random().toString(36).substring(2) + new Date().getTime().toString(36);

// formateador de cantidades
export const formatQuantity = (quantity) => {
  return quantity
    .toLocaleString("es-ES", {
      style: "currency",
      currency: "MXN",
    })
    .replace("MXN", "");
};

// formateador de fecha de Date.now()
export const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("es-ES", options);
};
