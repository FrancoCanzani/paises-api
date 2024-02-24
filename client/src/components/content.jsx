import Code from './code';
import Title from './title';
import FieldsTable from './fields-table';
import { data } from '../utils/constants';
import SubTitle from './sub-title';

export default function Content() {
  const URL = import.meta.env.VITE_DEPLOYMENT_URL;

  return (
    <section className='px-6 py-4'>
      <Title id='sobre'>Sobre este proyecto</Title>
      <p className='text-pretty leading-relaxed mb-3'>
        Esta REST API de países es una plataforma que proporciona información
        detallada sobre todos los países del mundo.
        <br />
        Ofrece endpoints bien definidos para acceder a información específica,
        lo que facilita su integración en aplicaciones web, móviles u otros
        servicios digitales. Los desarrolladores pueden construir aplicaciones
        educativas, herramientas de viaje, servicios de análisis geográfico y
        muchas otras soluciones que requieren datos precisos y actualizados
        sobre países de todo el mundo.
        <br />
        La información se mantiene actualizada regularmente para garantizar la
        precisión y fiabilidad de los datos proporcionados.
      </p>
      <span>Vesión actual: 1.0</span>
      <hr className='my-3' />
      <Title id='campos'>Campos</Title>
      <FieldsTable />
      <hr className='my-3' />
      <div className='hidden lg:block'>
        <Title>Ejemplo de respuesta</Title>
        <pre>
          <Code>{data}</Code>
        </pre>
        <hr className='my-3' />
      </div>
      <Title id='endpoints' className={'underline text-2xl'}>
        Endpoints
      </Title>
      <Title>Filtros</Title>
      <p>
        Permite filtrar el resultado de la solicitud para incluir solo los
        campos especificados.
      </p>
      <Code
        className={'my-2'}
      >{`${URL}v1/{servicio}?filtros={campo},{campo},{campo}`}</Code>
      <SubTitle>Ejemplo</SubTitle>
      <Code
        className={'my-2'}
      >{`${URL}v1/nombre/argentina?filtros=nombre,capital,region`}</Code>
      <hr className='my-3' />
      <Title id='todos'>Todos</Title>
      <p>Devuelve todos los paises disponibles.</p>
      <Code className={'my-2'}>{`${URL}v1/todos`}</Code>
      <hr className='my-3' />
      <Title id='nombre'>Nombre</Title>
      <p>
        Busqueda por nombre de país. Filtra por nombre común u oficial del país.
      </p>
      <Code className={'my-2'}>{`${URL}v1/nombre/{nombre}`}</Code>
      <SubTitle>Ejemplo</SubTitle>
      <Code className={'my-2'}>{`${URL}v1/nombre/argentina`}</Code>
      <hr className='my-3' />
      <Title id='moneda'>Moneda</Title>
      <p>
        Busqueda por la moneda del país. Devuelve todos los paises donde se
        utiliza la moneda seleccionada.
      </p>
      <Code className={'my-2'}>{`${URL}v1/moneda/{moneda}`}</Code>
      <SubTitle>Ejemplo</SubTitle>
      <Code className={'my-2'}>{`${URL}v1/moneda/peso`}</Code>
      <hr className='my-3' />
      <Title id='capital'>Capital</Title>
      <p>Busqueda por la capital del país.</p>
      <Code className={'my-2'}>{`${URL}v1/capital/{capital}`}</Code>
      <SubTitle>Ejemplo</SubTitle>
      <Code className={'my-2'}>{`${URL}v1/capital/buenosaires`}</Code>
      <hr className='my-3' />
      <Title id='idioma'>Idioma</Title>
      <p>Busqueda por el idioma del país.</p>
      <Code className={'my-2'}>{`${URL}v1/idioma/{idioma}`}</Code>
      <SubTitle>Ejemplo</SubTitle>
      <Code className={'my-2'}>{`${URL}v1/idioma/español`}</Code>
      <hr className='my-3' />
      <Title id='poblacion'>Población</Title>
      <p>
        Busqueda por el idioma del país. Devuelve los paises cuya población es{' '}
        <strong>mayor o igual</strong>.
      </p>
      <Code className={'my-2'}>{`${URL}v1/poblacion/{poblacion}`}</Code>
      <SubTitle>Ejemplo</SubTitle>
      <Code className={'my-2'}>{`${URL}v1/poblacion/145000000`}</Code>
      <hr className='my-3' />
      <Title id='region'>Región</Title>
      <p>
        Busqueda por el idioma del país. Devuelve los paises cuya población es{' '}
        <strong>mayor o igual</strong>.
      </p>
      <Code className={'my-2'}>{`${URL}v1/region/{region}`}</Code>
      <SubTitle>Ejemplo</SubTitle>
      <Code className={'my-2'}>{`${URL}v1/region/asia`}</Code>
    </section>
  );
}
