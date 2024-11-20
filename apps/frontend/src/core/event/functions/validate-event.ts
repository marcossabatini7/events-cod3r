import Ev3nt from "../model/ev3nt";

export default function validateEvent(event: Partial<Ev3nt>): string[] {
    const errors: string[] = []

    if (!event.name) {
        errors.push('O nome é obrigatório')
    }

    if (!event.alias) {
        errors.push('O apelido é obrigatório')
    }

    if (!event.date) {
        errors.push('A data é obrigatória')
    }

    if (!event.location) {
        errors.push('A localização é obrigatória')
    }

    if (!event.description) {
        errors.push('A descrição é obrigatória')
    }

    if (!event.expectedAudience) {
        errors.push('O publico esperado é obrigatório')
    }

    return errors
}
