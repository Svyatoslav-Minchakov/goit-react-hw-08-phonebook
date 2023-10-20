import { TitleHome, Logo } from './Home.styled';
import phonebook from 'image/phonebook.webp';

export default function Home() {
  return (
    <>
      <TitleHome>Welcome to PhoneBook</TitleHome>
      <Logo>
        <img src={phonebook} alt="Logo" height="400" />
      </Logo>
    </>
  );
}
