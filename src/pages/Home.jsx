import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useFetchCountries } from 'hooks';

export const Home = () => {
  const { countries, error, isLoading } = useFetchCountries();
  console.log(countries);

  return (
    <Section>
      <Container>
        <h2>Home</h2>
      </Container>
    </Section>
  );
};
