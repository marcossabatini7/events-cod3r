import { Ev3nt } from '../event'
import { Id } from '../shared'

const ev3nts: Ev3nt[] = [
    {
        id: Id.generate(),
        alias: 'evento-fullstack',
        password: 'password@123',
        name: 'Evento de Desenvolvimento de Software',
        date: new Date('2024-12-12'),
        location: 'São Paulo, SP',
        description: 'Um evento de desenvolvimento de software para iniciantes e avancados',
        image: 'https://res.cloudinary.com/appmasters-io/image/upload/v1676307834/Untitled_6_8cf5cf1ca8.png',
        imageBackground: 'https://img.freepik.com/vetores-gratis/particula-de-tecnologia-abstrata-realista-de-fundo_23-2148431735.jpg',
        expectedAudience: 100,
        guests: [
            {
                id: Id.generate(),
                name: 'Ana',
                email: 'ana@email.com',
                confirmed: true,
                hasCompanion: true,
                qtdCompanions: 1
            },
            {
                id: Id.generate(),
                name: 'João',
                email: 'joao@email.com',
                confirmed: true,
                hasCompanion: false,
                qtdCompanions: 0
            },
            {
                id: Id.generate(),
                name: 'Maria',
                email: 'maria@email.com',
                confirmed: false,
                hasCompanion: false,
                qtdCompanions: 0
            },
            {
                id: Id.generate(),
                name: 'Pedro',
                email: 'pedro@email.com',
                confirmed: false,
                hasCompanion: false,
                qtdCompanions: 0
            }
        ]
    }
]

export { ev3nts }
