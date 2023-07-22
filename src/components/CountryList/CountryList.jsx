import { Grid, GridItem } from 'components';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { routes } from 'routes';
export const CountryList = ({ countries }) => {
  const location = useLocation();

  return (
    <Grid>
      {countries &&
        countries.map(({ id, country, flag }) => (
          <GridItem key={id}>
            <Link to={`${routes.COUNTRY}/${id}`} state={{ from: location }}>
              <img src={flag} alt={country} />
            </Link>
          </GridItem>
        ))}
    </Grid>
  );
};

CountryList.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      flag: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
