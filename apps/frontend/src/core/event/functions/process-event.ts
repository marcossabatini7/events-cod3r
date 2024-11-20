import { Id, Password } from "@/core/shared"
import Ev3nt from "../model/ev3nt"
import validateEvent from "./validate-event"

export default function processEvent(partialEvent: Partial<Ev3nt>): Ev3nt {
    const errors = validateEvent(partialEvent)

    if (errors.length > 0) {
        throw new Error(errors.join(', '))
    }

    return {
        ...partialEvent,
        id: partialEvent?.id ?? Id.generate(),
        password: partialEvent?.password ?? Password.generate(20),
        expectedAudience: partialEvent?.expectedAudience ?? 1,
        guests: partialEvent?.guests?.map((guest) => {
            return {
                ...guest,
                qtdCompanions: guest.hasCompanion ? guest.qtdCompanions : 0
            }
        }) ?? []
    }
}
