import {
  CountryWrapper,
  CountryDescription,
  Flag,
  Image,
  CountryTitle,
  CountryCapital,
  CountryDetail,
  Accent,
} from './CountryInfo.styled';
import PropTypes from 'prop-types';
export const CountryInfo = ({
  country: { flag, capital, countryName, languages = [], population },
}) => {
  return (
    <CountryWrapper>
      <Flag>
        <Image src={flag} alt={countryName} />
      </Flag>
      <CountryDescription>
        <CountryCapital>
          Capital: <Accent>{capital}</Accent>
        </CountryCapital>

        <CountryTitle>
          {countryName === 'Russian Federation' ? 'MORDOR' : countryName}
        </CountryTitle>

        <CountryDetail>
          Population: <Accent>{population}</Accent>
        </CountryDetail>

        <CountryDetail>
          Languages: <Accent>{languages.join(', ')}.</Accent>
        </CountryDetail>
      </CountryDescription>
    </CountryWrapper>
  );
};

CountryInfo.propTypes = {
  country: PropTypes.shape({
    flag: PropTypes.string.isRequired,
    capital: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    countryName: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string),
    population: PropTypes.number.isRequired,
  }).isRequired,
};
