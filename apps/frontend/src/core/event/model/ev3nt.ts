import Guest from './guest'

export default interface Ev3nt {
    id: string
    alias: string
    password: string
    name: string
    date: Date
    location: string
    description: string
    image: string
    imageBackground: string
    expectedAudience: number
    guests: Guest[]
}
