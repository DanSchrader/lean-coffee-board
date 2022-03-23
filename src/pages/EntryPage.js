import styled from 'styled-components';
import Entry from '../components/Entry';
import EntryForm from '../components/EntryForm';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function EntryPage({ user, userColor }) {
  const {
    data: entries,
    error: entriesError,
    mutate: mutateEntries,
  } = useSWR('/api/entries', fetcher, { refreshInterval: 1000 });

  if (entriesError) return <h1>Sorry, could not fetch data...</h1>;
  if (!entries) return <em>loading...</em>;
  return (
    <Wrapper>
      <EntryPageHeader>
        <Title>LeanCoffeeBoard</Title>
      </EntryPageHeader>
      <EntryList role="list">
        {entries.map(({ text, author, color, createdAt, _id }) => (
          <li key={_id}>
            <Entry
              _id={_id}
              text={text}
              author={author}
              color={color}
              createdAt={createdAt}
              onDelete={() => handleDelete(_id)}
            />
          </li>
        ))}
      </EntryList>
      <EntryForm onSubmit={handleNewEntry} />
    </Wrapper>
  );

  async function handleNewEntry(text) {
    const newEntry = {
      text,
      author: user,
      color: userColor,
    };

    mutateEntries([...entries, newEntry], false);
    await fetch('/api/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEntry),
    });

    mutateEntries();
  }

  async function handleDelete(_id) {
    const filteredEntries = entries.filter(entry => entry._id !== _id);
    mutateEntries(filteredEntries, false);

    await fetch('/api/entries', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id }),
    });

    mutateEntries();
  }
}

const Wrapper = styled.div`
  display: grid;
  position: relative;
`;

const EntryPageHeader = styled.div`
  background: #fefefe;
  padding: 0;
  margin: 10px 10px 0 10px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px -1px;
`;

const Title = styled.h1`
  text-align: center;
  color: #656565;
  font-weight: 300;
  font-size: 150%;
  padding-top: 5px;
  margin: 0;
`;

const EntryList = styled.ul`
  display: grid;
  justify-items: center;
  gap: 20px;
  padding-left: 0;
  list-style: none;
  @media (min-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 950px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
