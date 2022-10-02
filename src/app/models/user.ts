export namespace UserInformation{

    export interface Name {
        title: string;
        first: string;
        last: string;
    }

    export interface Street {
        number: number;
        name: string;
    }

    export interface Location {
        street: Street;
        city: string;
        state: string;
        country: string;
        postcode: number;
    }

    export interface Dob {
        date: Date;
        age: number;
    }

    export interface Picture {
        large: string;
        medium: string;
        thumbnail: string;
    }

    export interface User {
        results: User;
        gender: string;
        name: Name;
        location: Location;
        email: string;
        dob: Dob;
        phone: string;
        cell: string;
        picture: Picture;
        nat: string;
    }


}