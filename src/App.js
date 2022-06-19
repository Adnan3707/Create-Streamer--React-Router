import React from 'react';
// import { BrowserRouter, Route ,Link  } from 'react-router-dom';
import { Router, Route ,Link , Switch  } from 'react-router-dom';
import StreamCreate from './components/streams/StreamCreate'
import StreamDelete from './components/streams/StreamDelete'
import StreamEdit from './components/streams/StreamEdit'
import StreamList from './components/streams/StreamList'
import StreamShow from './components/streams/StreamShow'
import Header from './components/Header';
import history from './history';

const PageOne = () => {
    return <div>PageOne
       <a href='/pagetwo'>Navigate to Page Two</a>
    </div>;
  };
  
  const PageTwo = () => {
    return (
      <div>
        PageTwo
        <Link  to='/'>Navigate to Page One</Link>
        <button>Click Me!</button>
      </div>
    );
  };
  
  const App = () => {
    return (
      <div className='ui container'>
        {/* <h1>Header!</h1> */}
        {/* <BrowserRouter history={history}> */}
        <Router history={history}>
          <div>
        <Header/>
        <Switch>
            <Route  path="/" exact component = {StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
          </div>
        {/* </BrowserRouter> */}
        </Router>
     </div>
    );
  };



export default App;
