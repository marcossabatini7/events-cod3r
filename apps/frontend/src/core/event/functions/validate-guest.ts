import Guest from "../model/guest";

export default function validateGuest(guest: Partial<Guest>): string[] {
    const errors: string[] = []

    if (!guest.name) {
        errors.push('O nome é obrigatório')
    }

    if (!guest.email) {
        errors.push('O email é obrigatório')
    }

    return errors
}
