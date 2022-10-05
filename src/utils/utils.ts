export const chunkArr = <T>(arr: T[], chunkSize: number): T[][] => {
    const chunked = [];

    for (let i = 0; i < arr.length; i += chunkSize) {
        chunked.push(arr.slice(i, i + chunkSize));
    }

    return chunked;
};