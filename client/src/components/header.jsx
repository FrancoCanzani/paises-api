import Anchor from './anchor';

export default function Header() {
  return (
    <header className='flex items-center justify-between px-6 py-3'>
      <h1 className='text-3xl font-semibold'>Paises API</h1>
      <div>
        <Anchor href={'https://github.com/FrancoCanzani/paises-api'}>
          Github
        </Anchor>
      </div>
    </header>
  );
}
