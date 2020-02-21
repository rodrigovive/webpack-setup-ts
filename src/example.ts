const a = 123;

type User = {
  name: string;
  age: number;
};

function getUserName(user: User): string {
  return user.name;
}

getUserName({
  name: 'test',
  age: 1,
});
