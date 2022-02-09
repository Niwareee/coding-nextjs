import useTranslate from "../../core/hooks/useTranslate";

function Article() {
  const { translate } = useTranslate();

  return (
    <div>
      <h1> i18n {translate("example")} </h1>
      <h1> salut ça va: {translate("hello")} </h1>
    </div>
  );
}

export default Article;
