import { Grid, GridItem } from 'components';
import PropTypes from 'prop-types'; 
export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries&&countries.map(({id,country,flag})=>
        (<GridItem key={id}>
          <img src={flag} alt={country}/>
        </GridItem>)
      )}
    </Grid>
  );

};

CountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
  }).isRequired,).isRequired,
}