import { FunctionComponent } from 'react';

type Props = {
  person: IPerson;
};

export const PersonGeneralInfo: FunctionComponent<Props> = ({ person }) => {
  return (
    <div>
      <div className="person-info">
        <div className="person-info-label">Balance</div>
        <div className="person-info-value">{person.balance}</div>
      </div>
      <div className="person-info">
        <div className="person-info-label">Age</div>
        <div className="person-info-value">{person.age}</div>
      </div>
      <div className="person-info">
        <div className="person-info-label">Eye color</div>
        <div className="person-info-value">{person.eyeColor}</div>
      </div>
      <div className="person-info">
        <div className="person-info-label">Company</div>
        <div className="person-info-value">{person.company}</div>
      </div>
      <div className="person-info">
        <div className="person-info-label">Email</div>
        <div className="person-info-value">{person.email}</div>
      </div>
      <div className="person-info">
        <div className="person-info-label">Phone</div>
        <div className="person-info-value">{person.phone}</div>
      </div>
      <div className="person-info">
        <div className="person-info-label">Favorite fruit</div>
        <div className="person-info-value">{person.favoriteFruit}</div>
      </div>
    </div>
  );
};
