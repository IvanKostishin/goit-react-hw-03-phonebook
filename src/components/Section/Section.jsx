import css from './Section.module.css';
import propTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
};
export default Section;
Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};
