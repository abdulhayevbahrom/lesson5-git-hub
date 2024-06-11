import React from "react";
import "./Header.css";

function Header() {
  return (    
    <header>
      <nav>
      <a href="/">Тошкент</a>
        <a href="/">Бизнинг дўконларимиз</a>
        <a href="/">Юридик шахслар учун</a>
        <a href="/">Тўлов усуллари</a>
      </nav>
      <div className="language">
      <p>+99871 209 99 44</p>
        <div className="lan">
        <p>УЗ</p>

        </div>
      </div>
    </header>
  );
}

export default Header
    