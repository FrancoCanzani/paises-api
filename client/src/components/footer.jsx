export default function Footer() {
  return (
    <footer className='px-6 py-4 flex items-center justify-evenly'>
      <span>Copyright ©</span>{' '}
      <span>
        Creado por{' '}
        <a
          href='https://github.com/FrancoCanzani'
          target='_blank'
          className='underline font-semibold'
        >
          Franco Canzani
        </a>
      </span>
    </footer>
  );
}
