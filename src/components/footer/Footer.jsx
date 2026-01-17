function Footer() {
  const openHours = 10;
  const closeHours = 23;
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= openHours && currentHour < closeHours;

  if (!isOpen) {
    return (
      <footer>
        We're happy to welcome you between {openHours}:00 and {closeHours}:00.
      </footer>
    );
  }

  return <footer>We're currently open from 10am to 11pm every day</footer>;
}

export default Footer;
