export default class Dat3 {
    static format(value: Date = new Date()): string {
        const pad = (value: number) => value.toString().padStart(2, '0');

        const year = value.getFullYear();
        const month = pad(value.getMonth() + 1);
        const day = pad(value.getDate());
        const hours = pad(value.getHours());
        const minutes = pad(value.getMinutes());

        return `${year}-${month}-${day}T${hours}:${minutes}`
    }

    static parse(value: string): Date {
        const [date, time] = value.split('T');
        const [year, month, day] = date.split('-');
        const [hours, minutes] = time.split(':');

        return new Date(Number(year), Number(month) - 1, Number(day), Number(hours), Number(minutes));
    }
}
