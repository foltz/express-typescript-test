//eval('var Slacktravel = (this.Slacktravel || (this.Slacktravel = {}))');
//import Firebase from 'firebase';

module Auth.AppUsers {

	interface IAppUser {

		firstName?:string;
		lastName?:string;
		email?:string;
	}

	class AppUserDoc implements IAppUser {
		firstName:string;
		lastName:string;
		email:string;
	}
	class AppUserForm {

		id:string;
		firstName:string;
		lastName:string;
		email:string;
	}

	export class AppUserCommands {


		//fbRepo:Firebase = null;

		constructor() {
			//this.fbRepo = new Firebase(url);
		}

		runTest(test:string) { return `yo baby! ${test} user`}
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

//export default AppUsers;