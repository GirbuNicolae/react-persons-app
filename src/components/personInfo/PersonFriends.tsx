import { FunctionComponent } from 'react';
import { Badge } from 'react-bootstrap';

type Props = {
  friends: IPersonFriend[];
};

export const PersonFriends: FunctionComponent<Props> = ({ friends }) => {
  return (
    <div>
      {friends.map((friend: IPersonFriend) => (
        <Badge key={friend.id} className="mr-2" variant="warning">
          {friend.name}
        </Badge>
      ))}
    </div>
  );
};
