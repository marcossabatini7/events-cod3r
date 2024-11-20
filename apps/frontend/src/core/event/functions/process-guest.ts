import { Id } from "@/core/shared";
import Guest from "../model/guest";
import validateGuest from "./validate-guest";

export default function processGuest(guest: Partial<Guest>): Guest {
    const errors = validateGuest(guest)

    if (errors.length > 0) {
        throw new Error(errors.join(', '))
    }

    if (!guest.confirmed) {
        guest.hasCompanion = false
        guest.qtdCompanions = 0
    }

    guest.qtdCompanions = guest.hasCompanion ? guest.qtdCompanions : 0

    return { ...guest, id: guest.id ?? Id.generate() }
}
