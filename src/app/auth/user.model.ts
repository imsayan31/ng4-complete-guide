export class User {
    constructor(
        public status: number,
        public id: number,
        private _token: string,
        private _tokenExpiration: Date
        ) {

    }

    get token() {
        if (!this._tokenExpiration || new Date() > this._tokenExpiration) {
            return null;
        }
        return this._token;
    }
}