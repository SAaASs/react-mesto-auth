import { useNavigate } from "react-router-dom";
export function Header({
  isLoggining,
  setIsLoggining,
  setIsLoggedIn,
  email,
  isLoggedIn,
}) {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__right">
        <div className="header__email">{email}</div>
        {isLoggedIn ? (
          <button
            onClick={() => {
              localStorage.removeItem("mestoReactToken");
              setIsLoggedIn(false);
            }}
            className="header__button"
          >
            Выйти
          </button>
        ) : isLoggining ? (
          <button
            onClick={() => {
              navigate("/sign-in");
              setIsLoggining(false);
            }}
            className="header__button"
          >
            Войти
          </button>
        ) : (
          <button
            onClick={() => {
              navigate("/sign-up");
              setIsLoggining(true);
            }}
            className="header__button"
          >
            Регистрация
          </button>
        )}
      </div>
    </header>
  );
}
