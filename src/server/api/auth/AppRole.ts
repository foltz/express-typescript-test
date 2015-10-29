//import Firebase from 'firebase';

module Auth.AppRoles {


	interface IAppRole {

		firstName?:string;
		lastName?:string;
		email?:string;
	}

	class AppRoleDoc implements IAppRole {
		firstName:string;
		lastName:string;
		email:string;
	}
	class AppRoleForm {

		id:string;
		firstName:string;
		lastName:string;
		email:string;
	}

	export class AppRoleCommands {


		//fbRepo:Firebase = null;

		constructor() {
			//this.fbRepo = new Firebase(url);
		}

		runTest(test:string) { return `yo baby! ${test} role`}
	}

	class Command {

		public success: boolean;
		public error: string;
		public data: any;

		public setError(msg) {
			this.success = false;
			this.error = msg;
			return this;
		}

		public setSuccess(data) {
			this.success = true;
			this.data = data;
			return this;
		}
	}
}
