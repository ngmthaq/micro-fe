import { useTranslation } from "react-i18next";
import { AppLoading } from "react-remote-1/index";

function App() {
  const { i18n } = useTranslation();

  return (
    <>
      <button type="button" onClick={() => i18n.changeLanguage("en")}>
        EN
      </button>
      <button type="button" onClick={() => i18n.changeLanguage("fr")}>
        FR
      </button>
      <AppLoading isOpen />
    </>
  );
}

export default App;
