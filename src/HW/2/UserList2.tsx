import {CurrentUser} from './CurrentUser';
import {UsersObjectType} from './HW2';

type UserType = {
	id: number;
	name: string;
	age: number;
	address: {
		city: string;
		state: string;

	};
};

type UserList2PropsType = {
	users: UsersObjectType; // пропиши типизацию
	filterUsers: () => void; // пропиши типизацию
};

export const UserList2 = (props: UserList2PropsType) => {
	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>

			<button id={'hw02-filter-button'} onClick={() => props.filterUsers}>SHOW ME FRIENDS FROM LA</button>

			<ul>
			  {props.users.myFriends.map((user: UserType) => (
			    <CurrentUser key={user.id} user={user} />
			  ))}
			</ul>
		</div>
	);
};
