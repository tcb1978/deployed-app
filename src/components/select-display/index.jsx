import React, { useState, useContext } from 'react';
import FlexRow from '../flex-row/';
import Card from '../card/index';
import Select from '../select';
import UnorderedList from '../unordered-list';
import ListItem from '../list-item';
import dynamicSort from '../../utils/dynamicSort';
import { Context } from '../../context/Collection';

const SelectDisplay = () => {
  const context = useContext(Context);
  const { collection } = context;
  const sortedCollection = collection.sort(dynamicSort('author'));
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const handleSelectChange = (event) => {
    setSelectedAuthor(event.target.value);
  };

  return (
    <>
      <FlexRow>
        <Select
          selectedAuthor={selectedAuthor}
          handleSelectChange={handleSelectChange}
          sortedCollection={sortedCollection}
        />
      </FlexRow>
      <FlexRow>
        <UnorderedList>
          {selectedAuthor !== '' && (
            sortedCollection.filter(person => person.author === selectedAuthor).map(author => (
              <ListItem key={author.id}>
                <Card
                  author={author.author}
                  id={author.id}
                  img={author.img}
                  title={author.title}
                  url={author.url}
                />
              </ListItem>
            ))
          )}
          {selectedAuthor === '' && (
            collection.map(item => (
              <ListItem key={item.id}>
                <Card
                  author={item.author}
                  id={item.id}
                  img={item.img}
                  title={item.title}
                  url={item.url}
                />
              </ListItem>
            ))
          )}
        </UnorderedList>
      </FlexRow>
    </>
  )
};

export default SelectDisplay;

