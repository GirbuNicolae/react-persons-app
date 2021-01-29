interface IPersonName {
  first: string;
  last: string;
}

interface IPersonFriend {
  id: string;
  name: string;
}

interface IPerson {
  _id: string;
  index: number;
  guid: string;
  isActive: boolean;
  balance: string;
  picture: string;
  age: number;
  eyeColor: string;
  name: IPersonName;
  company: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  registered: string;
  latitude: string;
  longitude: string;
  tags: string[];
  range: number[];
  friends: IPersonFriend[];
  greeting: string;
  favoriteFruit: string;
}

type PersonsState = {
  persons: IPerson[];
  allPersonsLoaded: boolean;
  activePersonId: string;
  isLoading: boolean;
};

type PersonAction = {
  type: string;
  payload: any;
};

type DispatchType = (args: PersonAction) => PersonAction;
