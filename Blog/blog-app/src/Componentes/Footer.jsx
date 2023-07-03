import "./Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center">
      <p>Cosasdegatos &copy; {currentYear}</p>
    </footer>
  );
};
