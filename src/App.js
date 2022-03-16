import styled from 'styled-components';
import Entry from './components/Entry';
import EntryForm from './components/EntryForm';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function App() {
  const {
    data: entries,
    error: entriesError,
    mutate: mutateEntries,
  } = useSWR('/api/entries', fetcher, { refreshInterval: 1000 });

  if (entriesError) return <h1>Sorry, could not fetch data...</h1>;
  if (!entries) return <em>loading...</em>;
  return (
    <Wrapper>
      <h1>Lean Coffee Board</h1>
      <EntryList role="list">
        {entries.map(({ text, author, _id }) => (
          <li key={_id}>
            <Entry text={text} author={author} />
          </li>
        ))}
      </EntryList>
      <EntryForm onSubmit={handleNewEntry} />
    </Wrapper>
  );

  async function handleNewEntry(text) {
    const newEntry = {
      text,
      author: 'Anonymous',
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
}

const Wrapper = styled.div`
  display: grid;
  position: relative;
`;

const EntryList = styled.ul`
  display: grid;
  grid-auto-columns: auto;
  gap: 20px;
  list-style: none;
  padding: 0;
`;
