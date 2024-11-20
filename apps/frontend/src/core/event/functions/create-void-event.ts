import { Id } from "@/core/shared";
import Ev3nt from "../model/ev3nt";

export default function createVoidEvent(): Partial<Ev3nt> {
    return {
        id: Id.generate(),
        name: '',
        description: '',
        date: new Date(),
        location: '',
        expectedAudience: 1,
        guests: [],
        password: '',
        alias: '',
        image: '',
        imageBackground: ''
    }
}
