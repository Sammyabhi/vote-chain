import React from 'react';
import './phase.css';


function Phase() {
  return (
    <body className='phase-body'>
            <table className='content-table'>
                <thead className='thead'>
                    <tr>
                    <th>Change Phase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Current Phase : Election Phase</td>
                    
                    </tr>
                    
                    <tr>
                    <td>
                    <button className = 'button1' id = 'button1'>Change Phase</button>
                    </td>
                    
                    </tr>
                </tbody>
            </table>
        </body>
  );
}


export default Phase;
