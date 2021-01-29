import { FunctionComponent } from 'react';
import { Badge } from 'react-bootstrap';

type Props = {
  tags: string[];
};

export const PersonTags: FunctionComponent<Props> = ({ tags }) => {
  return (
    <div>
      {tags.map((tag: string, i: number) => (
        <Badge key={i} className="mr-2" variant="secondary">
          #{tag}
        </Badge>
      ))}
    </div>
  );
};
