import { Id } from '@/core/shared'
import Guest from '../model/guest'

export default function createVoidGuest(): Partial<Guest> {
    return {
        id: Id.generate(),
        name: '',
        email: '',
        confirmed: true,
        hasCompanion: false,
        qtdCompanions: 0
    }
}
