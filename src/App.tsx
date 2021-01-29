import { FunctionComponent, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { PersonsList } from 'components/PersonsList';
import { getPersons } from 'thunks/loadPersons';
import * as PERSONS_API from 'constants/personsAPI';
import { Container, Row, Col } from 'react-bootstrap';
import { PersonPreview } from 'components/PersonPreview';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: FunctionComponent = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const persons: IPerson[] = useSelector((state: PersonsState) => state.persons, shallowEqual);
  const allPersonsLoaded: boolean = useSelector(
    (state: PersonsState) => state.allPersonsLoaded,
    shallowEqual,
  );
  const activePersonId: string = useSelector(
    (state: PersonsState) => state.activePersonId,
    shallowEqual,
  );
  const activePersonF = (): IPerson => {
    const matchedPerson = persons.find((h) => h._id === activePersonId);
    return matchedPerson ? matchedPerson : persons[0];
  };

  let activePerson = activePersonF();

  useEffect(() => {
    if (!allPersonsLoaded) {
      getPersons(PERSONS_API.PERSONS_API, dispatch).catch(() => {
        toast.error('Cannot load data from API');
      });
    }
  }, []);

  return (
    <main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Container className="mt-4" fluid>
        <Row>
          <Col xs={12} sm={4}>
            {persons.length && <PersonsList persons={persons} />}
          </Col>
          <Col xs={12} sm={8}>
            <div>{activePerson && <PersonPreview person={activePerson} />}</div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default App;
