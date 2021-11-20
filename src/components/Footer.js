import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Telegram{' '}
      <a href="https://t.me/basqar">@basqar</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://facebook.com/asqar">Asqar</a>.
        </span>
      </div>
    </footer>
  </div>
)
