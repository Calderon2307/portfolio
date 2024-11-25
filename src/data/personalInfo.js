const fechaNacimiento = new Date(1999, 10, 24);

function calcularEdad(fechaNacimiento) {
  const actual = new Date();
  let edad = actual.getFullYear() - fechaNacimiento.getFullYear();
  const mes = actual.getMonth() - fechaNacimiento.getMonth();

  if (mes < 0 || (mes === 0 && actual.getDate() < fechaNacimiento.getDate())) {
    edad--;
  }

  return `${edad}`;
}

export const personalInfoEs = [
  { field: 'Nombre', value: 'Federico Josué Calderón Durán' },
  {
    field: 'Edad',
    get value() {
      return calcularEdad(fechaNacimiento);
    },
  },
  { field: 'Ubicación', value: 'San Salvador, El Salvador' },
  { field: 'Idiomas', value: 'Español (nativo), Inglés (intermedio-avanzado)' },
  { field: 'Disponibilidad', value: 'En remoto' },
  {
    field: 'Especialidad',
    value: 'Desarrollo Frontend y Desarrollo de Aplicaciones Android',
  },
];

export const personalInfoEn = [
  { field: 'Name', value: 'Federico Josué Calderón Durán' },
  {
    field: 'Age',
    get value() {
      return calcularEdad(fechaNacimiento);
    },
  },
  { field: 'Location', value: 'San Salvador, El Salvador' },
  {
    field: 'Languages',
    value: 'Spanish (native), English (intermediate-advanced)',
  },
  { field: 'Availability', value: 'Remote' },
  {
    field: 'Specialty',
    value: 'Frontend Development and Android App Development',
  },
];
