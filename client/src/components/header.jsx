/* eslint-disable react/jsx-no-comment-textnodes */
import Anchor from './anchor';

export default function Header() {
  return (
    <header className='flex items-center justify-between px-6 py-4 border-b shadow-sm'>
      <h1 className='text-xl font-semibold'>//paises.api</h1>
      <div>
        <Anchor href={'https://github.com/FrancoCanzani/paises-api'}>
          Github
        </Anchor>
      </div>
    </header>
  );
}
