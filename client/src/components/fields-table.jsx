export default function FieldsTable() {
  return (
    <div className='bg-gray-200 p-2 rounded-sm'>
      <table className='border-collapse table-auto w-full'>
        <thead className='p-2'>
          <tr className='w-full'>
            <th className='text-left'>Campo</th>
            <th className='text-left'>Info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>nombre</td>
            <td>Nombre común y oficial del país, así como su nombre nativo.</td>
          </tr>
          <tr>
            <td>tld</td>
            <td>Domino de Internet del país.</td>
          </tr>
          <tr>
            <td>cca2</td>
            <td>Código alfa-2 del país según la norma ISO 3166-1.</td>
          </tr>
          <tr>
            <td>ccn3</td>
            <td>
              Código numérico de 3 dígitos del país según la norma ISO 3166-1.
            </td>
          </tr>
          <tr>
            <td>cca3</td>
            <td>Código alfa-3 del país según la norma ISO 3166-1.</td>
          </tr>
          <tr>
            <td>cioc</td>
            <td>Código del Comité Olímpico Internacional para el país.</td>
          </tr>
          <tr>
            <td>independiente</td>
            <td>
              Indica si el país es independiente según la norma ISO 3166-1.
            </td>
          </tr>
          <tr>
            <td>estado</td>
            <td>Estado de asignación del país según la norma ISO 3166-1.</td>
          </tr>
          <tr>
            <td>miembroONU</td>
            <td>Indica si el país es miembro de las Naciones Unidas.</td>
          </tr>
          <tr>
            <td>monedas</td>
            <td>Nombre y símbolo de la moneda del país.</td>
          </tr>
          <tr>
            <td>idd</td>
            <td>Código de marcación internacional del país.</td>
          </tr>
          <tr>
            <td>capital</td>
            <td>Nombre de la capital del país.</td>
          </tr>
          <tr>
            <td>nombresAlt</td>
            <td>Variantes de nombre del país.</td>
          </tr>
          <tr>
            <td>region</td>
            <td>Región del país según las Naciones Unidas.</td>
          </tr>
          <tr>
            <td>subregion</td>
            <td>Subregión del país según las Naciones Unidas.</td>
          </tr>
          <tr>
            <td>idiomas</td>
            <td>Idiomas oficiales del país.</td>
          </tr>
          <tr>
            <td>traducciones</td>
            <td>Traducciones del nombre del país en varios idiomas.</td>
          </tr>
          <tr>
            <td>latitudLongitud</td>
            <td>Coordenadas de latitud y longitud de la ubicación del país.</td>
          </tr>
          <tr>
            <td>tierraBloqueada</td>
            <td>Indica si el país tiene acceso al mar.</td>
          </tr>
          <tr>
            <td>borders</td>
            <td>Países vecinos del país.</td>
          </tr>
          <tr>
            <td>area</td>
            <td>Área geográfica del país.</td>
          </tr>
          <tr>
            <td>gentilicios</td>
            <td>Gentilicios del país en inglés y francés.</td>
          </tr>
          <tr>
            <td>bandera</td>
            <td>Emoji de la bandera del país.</td>
          </tr>
          <tr>
            <td>mapas</td>
            <td>Enlaces a mapas de Google y OpenStreetMap del país.</td>
          </tr>
          <tr>
            <td>poblacion</td>
            <td>Población del país.</td>
          </tr>
          <tr>
            <td>gini</td>
            <td>Índice Gini del país según el Banco Mundial.</td>
          </tr>
          <tr>
            <td>fifa</td>
            <td>Código FIFA del país.</td>
          </tr>
          <tr>
            <td>conduccion</td>
            <td>Señales de tráfico y sentido de conducción en el país.</td>
          </tr>
          <tr>
            <td>zonasHorarias</td>
            <td>Zonas horarias del país.</td>
          </tr>
          <tr>
            <td>continentes</td>
            <td>Continentes en los que se encuentra el país.</td>
          </tr>
          <tr>
            <td>banderas</td>
            <td>Enlaces a imágenes de la bandera del país.</td>
          </tr>
          <tr>
            <td>escudoDeArmas</td>
            <td>Enlaces a imágenes del escudo de armas del país.</td>
          </tr>
          <tr>
            <td>inicioDeLaSemana</td>
            <td>Día de inicio de la semana en el país.</td>
          </tr>
          <tr>
            <td>infoDeLaCapital</td>
            <td>Coordenadas de latitud y longitud de la capital del país.</td>
          </tr>
          <tr>
            <td>codigoPostal</td>
            <td>
              Formato y expresión regular de los códigos postales del país.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
