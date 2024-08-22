import { Link as RouterLink } from "react-router-dom";

const CustomLink = ({ to, children, ...props }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <RouterLink to={to} {...props} onClick={scrollToTop}>
      {children}
    </RouterLink>
  );
};

export default CustomLink;
