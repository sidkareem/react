import React from 'react';
import Auxilliary from '../../hoc1/Auxilliary/Auxilliary';

const layout = (props) => (
  <Auxilliary>
    <div>toolbar,sidedrawer,backdrop</div>
    <main>
      {props.children}
    </main>
  </Auxilliary>
);
export default layout;

