import useFormState from "./hooks/useFormState";

export default function SimpleForm() {
	const [ email, updateEmail, resetEmail ] = useFormState("");
	const [ username, updateUsername, resetUsername ] = useFormState("");
	const [ password, changePassword, resetPassword ] = useFormState("");
	return (
		<div>
			<h2>Email is...{email}</h2>
			<div>
				<input placeholder="email" onChange={updateEmail} type='text' value={email} />
				<button onClick={resetEmail}>Reset</button>
			</div>
            <h2>Username is...{username}</h2>
			<div>
				<input placeholder="username" onChange={updateUsername} type='text' value={username} />
				<button onClick={resetUsername}>Reset</button>
			</div>
            <h2>Password is...{password}</h2>
			<div>
				<input placeholder="password" onChange={changePassword} type='text' value={password} />
				<button onClick={resetPassword}>Reset</button>
			</div>
		</div>
	);
}
