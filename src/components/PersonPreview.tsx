import { FunctionComponent } from 'react';
import { Row, Col, Image, Badge, Container } from 'react-bootstrap';
import { PersonGeneralInfo } from 'components/personInfo/PersonGeneralInfo';
import { PersonLocation } from 'components/personInfo/PersonLocation';
import { PersonTags } from 'components/personInfo/PersonTags';
import { PersonFriends } from 'components/personInfo/PersonFriends';
import 'assets/scss/_person-preview.scss';

type Props = {
  person: IPerson;
};

export const PersonPreview: FunctionComponent<Props> = ({ person }) => {
  const position: [number, number] = [parseInt(person.longitude), parseInt(person.latitude)];

  return (
    <div className="person">
      <Container>
        <Row>
          <Col>
            <div>
              <div className="d-flex">
                <Image className="person-image" rounded src={person.picture} />
                <div className="ml-3">
                  <h3>
                    <Badge variant="info">{person.greeting}</Badge>
                  </h3>
                  <PersonTags tags={person.tags} />
                </div>
              </div>
              <h2 className="mt-2">
                {person.name.first} {person.name.last}
              </h2>
            </div>
            <hr />
            <h4>General informations:</h4>
            <PersonGeneralInfo person={person} />
            <hr />
            <h4>About</h4>
            <p>{person.about}</p>
            <hr />
            <h4>Location:</h4>
            <PersonLocation key={person._id} position={position} />
            <hr />
            <h4>Friends:</h4>
            <PersonFriends friends={person.friends} />
            <hr />
            <h6>Registered on:</h6>
            <p className="text-muted">{person.registered}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
