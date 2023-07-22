import { Section, Container, CountryInfo, Loader } from 'components';
import { useFetchCountry } from 'hooks';
import { Navigate } from 'react-router-dom';
import { routes } from 'routes';

export const Country = () => {
  const { country, error, isLoading } = useFetchCountry();

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <Navigate to={routes.HOME} replace />}
        {country && <CountryInfo country={country} />}
      </Container>
    </Section>
  );
};
