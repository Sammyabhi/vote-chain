import React from 'react';
import './guidelines.css';

function Guidlines() {
  
    return (
        
        <>
        <body className='guide-body'>  
      <h1 className='guide-h1' >Welcome!</h1>

      <h3 className='guide-h3'>There are some Guidelines for the user : </h3>

      <h4 className='guide-h4' >VOTING REGISTRATION:</h4>
      <ul>
          <li>For casting the vote, user needs to first register himself. For this registration purpose ,the user will be provided a voter registration form on this website.</li>
          <li>The voter can only register in the registration phase. After the registration phase is over the user can not register and thus will not be able to vote.</li>
          <li>For registration, the user will have to enter his Aadhar card number and the account address which the user will be using for voting purpose.</li>
          <li>At the first stage the user’s age will be checked if the user is 18 or above 18 years of age then he/she is eligible to vote.</li>
          <li>The send stage OTP verification. This stage is required to validate the voter itself. After entering the Aadhar number and successful age verification.</li>
          <li>After entering connect OTP user will get successfully registered.</li>
      </ul>
      <h4 className='guide-h4'>VOTING PROCESS:</h4>
      <ul>
      <li>Overall, voting process is divided into three phases. All of which will be initialised and terminated by the admin. User have to participate in the process according to current phase.</li>
      <ol>
          <li><u><b>Registration Phase</b></u>: During this phase the registration of the users (which are going to caste the vote) will be carried out.</li>
          
          <li><u><b>Voting Phase</b></u>: After initialization of the voting phase from the admin, user can caste the vote in voting section. The casting of the vote can be simply done by clicking on  ‘VOTE’ Button , after which transition will be initiated and after conforming the transaction the voter successfully casted. After voting phase gets over user will not be able to caste vote.</li>
          <li><u><b>Result Phase</b></u>: This is the final stage of whole voting process during which the results of election will be displayed at ‘Result’ Section.</li>
      </ol>
      </ul>
      </body>

</>
);
};
export default Guidlines;
