import { FunctionComponent, useEffect } from 'react';
import { PersonListItem } from 'components/PersonListItem';
import { useSelector, shallowEqual } from 'react-redux';
import { setActivePersonId, stopLoadingPersons, setIsLoading } from 'store/actionCreators';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { getPersons } from 'thunks/loadPersons';
import * as PERSONS_API from 'constants/personsAPI';
import { Button, ListGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';

type Props = {
  readonly persons: IPerson[];
};

export const PersonsList: FunctionComponent<Props> = ({ persons }) => {
  const dispatch: Dispatch<any> = useDispatch();
  const allPersonsLoaded: boolean = useSelector(
    (state: PersonsState) => state.allPersonsLoaded,
    shallowEqual,
  );
  const activePersonId: string = useSelector(
    (state: PersonsState) => state.activePersonId,
    shallowEqual,
  );
  const isLoading: boolean = useSelector((state: PersonsState) => state.isLoading, shallowEqual);

  const setActivePersonAction = (id: string) => {
    dispatch(setActivePersonId(id));
  };

  const loadMorePersons = () => {
    if (!allPersonsLoaded) {
      dispatch(setIsLoading(true));
      getPersons(PERSONS_API.ADD_PERSONS_API, dispatch)
        .catch(() => {
          toast.error('Cannot load data from API');
        })
        .finally(() => {
          dispatch(stopLoadingPersons());
          dispatch(setIsLoading(false));
        });
    }
  };

  const onPersonDelete = (id: string) => {
    if (activePersonId === id) {
      setActivePersonAction(persons[0]?._id);
    }
  };

  useEffect(() => {
    setActivePersonAction(persons[0]?._id);
  }, []);

  return (
    <div>
      <ListGroup activeKey={`#persons-list-person-${activePersonId}`}>
        {persons.map((person: IPerson, i) => (
          <ListGroup.Item
            action
            href={`#persons-list-person-${person._id}`}
            onClick={() => setActivePersonAction(person._id)}
            key={person._id}
          >
            <PersonListItem
              key={person._id}
              person={person}
              isActive={activePersonId === person._id}
              onPersonDelete={onPersonDelete}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
      {!allPersonsLoaded && (
        <Button
          variant="success"
          disabled={isLoading}
          className="mt-3"
          block
          onClick={loadMorePersons}
        >
          Add more
        </Button>
      )}
    </div>
  );
};
