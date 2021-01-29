import * as React from 'react';
import { X as DeleteIcon } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { deletePerson } from 'store/actionCreators';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import 'assets/scss/_person-list-item.scss';

type Props = {
  person: IPerson;
  isActive: boolean;
  onPersonDelete: Function;
};

export const PersonListItem: React.FC<Props> = ({ person, isActive, onPersonDelete }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const handleDeletePerson = (id: string, event: any) => {
    confirmAlert({
      title: 'Confirm deletion',
      message: 'Are you sure to do this?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            onPersonDelete(id);
            dispatch(deletePerson(id));
          },
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <div className="person-list-item">
      <div className="d-flex align-items-center">
        <div>
          {person.name.first} {person.name.last}
        </div>
        {isActive && (
          <div
            className="ml-auto person-list-item-delete d-flex align-items-center justify-content-center"
            onClick={(e) => handleDeletePerson(person._id, e)}
          >
            <DeleteIcon size={96} color="red" />
          </div>
        )}
      </div>
    </div>
  );
};
