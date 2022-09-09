export interface Course {
    id: string;
    title: string;
    instructor: string;
    stars: number;
    price: number;
    image: string;
    description: string;
    totalHours: number;
    updatedDate: string;
    points: string[];

    students: number;

    instructors: Instructor[];
    reviews: Review[];

    requirements: string[];

    content: Content;
}

export interface Content {
    sections: Section[];
    lectures: number;
    length: string;
}

export interface Section {
    name: string;
    items: [string, string][];
    length: string;
}

export interface Instructor {
    id: string;
    name: string;
    image: string;
    description: string;
    shortDescription: string;
    rating: number;
    reviews: number;
    students: number;
    courses: number;
}

export interface Review {
    id: string;
    name: string;
    image: string;
    rating: number;
    time: string;
    text: string;
}
