import axios from 'axios';

const getServerSideProps = async ({
  loading,
  setLoading,
  collection,
  setCollection,
}) => {
  const res = await axios.get('https://www.reddit.com/r/pics/.json?jsonp=');
  const data = await res.data;
  const children = data.data.children;
  children.forEach((item) => {
    try {
      collection.push({
        author: item.data.author,
        id: item.data.id,
        permalink: item.data.permalink,
        img: item.data.url,
        title: item.data.title,
        ups: item.data.ups,
        url: item.data.url,
      });
    } catch (e) {
      console.log(e);
    }
  });
    setCollection(collection);
    setLoading(!loading);
    return collection;
};

export default getServerSideProps;