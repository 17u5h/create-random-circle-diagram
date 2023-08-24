export const calcSectorLength = (radius: number, angle: number) => {
	return 2 * Math.PI * radius * angle / 360
}