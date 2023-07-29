import {
  Container,
  // SearchForm,
  Section,
  // Heading,
  // Loader,
  // CountryList,
} from 'components';
import { useFetchByRegion } from 'hooks';

export const CountrySearch = () => {
  const { countries, isLoading, error, onHandleSubmit } = useFetchByRegion();

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onHandleSubmit} />
        {isLoading && <Loader />}
        {error && (
          <Heading textAlign="center">Something went wrong ...</Heading>
        )}
        {countries && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
