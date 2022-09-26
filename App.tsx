import axios from 'axios';
import * as React from 'react';
import './style.css';
import Table from './Table';

export default function App() {
  const [myData, setData] = React.useState([]);

  // const getThat = async () => {
  //   const res = await axios.get(
  //     `https://mocki.io/v1/53d43fcc-b094-415e-b1c7-50050d0aa7d5`
  //   );
  //   setData(res.data);
  // };

  const handler = (id) => {
    //console.log(id);
  };

  const empData = React.useMemo(() => [...myData], [myData]);

  const column = React.useMemo(
    () => [
      { Header: 'Id', accessor: 'id' },
      { Header: 'First name', accessor: 'firstName' },
      { Header: 'Last Name', accessor: 'lastName' },
      { Header: 'Email', accessor: 'email' },
      {
        Header: 'Actions',
        Cell: (props) => (
          <div>
            <button onClick={() => handler(props)} className="btn btn-warning">
              Delete
            </button>{' '}
            {'  '}
            <button onClick={() => handler(props)} className="btn btn-info">
              Edit
            </button>
          </div>
        ),
      },
    ],
    []
  );
  React.useEffect(() => {
    axios
      .get(`https://mocki.io/v1/53d43fcc-b094-415e-b1c7-50050d0aa7d5`)
      .then((response) => {
        setData(response.data);
        console.log('BB');
      });
  }, []);

  const myCol = React.useMemo( 
    () => myData[0] ? Object.keys(myData[0])
    .map((key) => {return {Header: key, accessor: key};
  } )
  :[],[myData]
  );

  console.log(myCol)

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>Table!!</h1>
      <Table columns={myCol} data={myData} />
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
