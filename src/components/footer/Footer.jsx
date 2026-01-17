function Footer() {
  const openHours = 12;
  const closeHours = 22;
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= openHours && currentHour < closeHours;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We're currently open from 10am to 11pm every day. Come visit us or
            order online.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We're happy to welcome you between {openHours}:00 and {closeHours}
          :00.
        </p>
      )}
    </footer>
  );
}

export default Footer;
