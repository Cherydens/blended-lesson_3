import { Section, Container, CountryInfo, Loader, GoBackBtn } from 'components';
import { useFetchCountry } from 'hooks';
import { Navigate, useLocation } from 'react-router-dom';
import { routes } from 'routes';

export const Country = () => {
  const { country, error, isLoading } = useFetchCountry();
  const location = useLocation();

  const goBackLink = location?.state?.from ?? routes.HOME;
  return (
    <Section>
      <Container>
        <GoBackBtn path={goBackLink}>Back to countries</GoBackBtn>
        {isLoading && <Loader />}
        {error && <Navigate to={routes.HOME} replace />}
        {country && <CountryInfo country={country} />}
      </Container>
    </Section>
  );
};
