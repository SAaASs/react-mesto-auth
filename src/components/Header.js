export function Header({ email, isLoggedIn }) {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__right">
        <div className="header__email">{email}</div>
        {isLoggedIn ? (
          <button className="header__button">Выйти</button>
        ) : (
          <button className="header__button">Войти</button>
        )}
      </div>
    </header>
  );
}
