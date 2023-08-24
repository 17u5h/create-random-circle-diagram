import {generateSectorsParams} from "./generateSectorsParams";
import {calcSectorLength} from "./calcSectorLength";
import {minRadius, sectorColors} from "../constants/constants";

export const createDiagramParams = () => {

	const anglesAndRadii = generateSectorsParams()

	for (let i = 0; i < anglesAndRadii.length; i++) {

		anglesAndRadii[i].id = i + 1
		anglesAndRadii[i].stroke = sectorColors[i]
		anglesAndRadii[i].strokeWidth = 2 * (anglesAndRadii[i].radius - minRadius)
		const sectorLength = calcSectorLength(anglesAndRadii[i].radius, anglesAndRadii[i].angle)
		anglesAndRadii[i].strokeDasharray = `${sectorLength} 100`
		anglesAndRadii[i].sectorLength = sectorLength

		const shifts = [0]

		for (let j = 0; j < i; j++) {
			const dashoffset = anglesAndRadii[i].radius * anglesAndRadii[j].sectorLength / anglesAndRadii[j].radius
			shifts.push(dashoffset)
		}

		const summaryShift = shifts.reduce((acc, shift) => (acc - shift), 0)
		anglesAndRadii[i].strokeDashoffset = summaryShift
	}

	return anglesAndRadii
}