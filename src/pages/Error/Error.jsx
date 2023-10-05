function Error() {
  return (
    <section className="error">
      <span>404</span>
      <p>Oups! La page que<br className="errorLine" /> vous demandez n'existe pas.</p>
      <a href="/">Retourner sur la page d’accueil</a>
    </section>
  )
}

export default Error;