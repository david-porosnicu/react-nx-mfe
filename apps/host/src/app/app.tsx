import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Remote1 = React.lazy(() => import('remote1/Module'));

const UserProfile = React.lazy(() => import('user-profile/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/remote1">Remote1</Link>
        </li>
        <li>
          <Link to="/user-profile">UserProfile</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />
        <Route path="/remote1" element={<Remote1 />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
