import PropTypes from 'prop-types';
import Title from './title';

export default function Sidebar() {
  return (
    <aside className='px-6 py-4 h-screen hidden lg:block sticky top-0 min-w-64'>
      <Title>Secciones</Title>
      <div className='flex flex-col py-1'>
        <Section id='#sobre'>Sobre este proyecto</Section>
        <Section id='#endpoints'>Endpoints</Section>
        <div className='pl-2 flex flex-col italic text-slate-600'>
          <Section id='#todos'>Todos</Section>
          <Section id='#nombre'>Nombre</Section>
          <Section id='#moneda'>Moneda</Section>
          <Section id='#capital'>Capital</Section>
          <Section id='#idioma'>Idioma</Section>
          <Section id='#poblacion'>Población</Section>
          <Section id='#region'>Región</Section>
        </div>
      </div>
    </aside>
  );
}

function Section({ id, children }) {
  return (
    <a href={id} className='w-full mb-1 rounded-sm px-2 py-1 font-medium'>
      {children}
    </a>
  );
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
