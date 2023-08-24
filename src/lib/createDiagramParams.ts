import {generateSectorsParams} from "./generateSectorsParams";
import {calcSectorLength} from "./calcSectorLength";
import {minRadius, sectorColors} from "../constants/constants";

export const createDiagramParams = () => {

	const diagramParams = generateSectorsParams()

	for (let i = 0; i < diagramParams.length; i++) {

		diagramParams[i].id = i + 1
		diagramParams[i].stroke = sectorColors[i]
		diagramParams[i].strokeWidth = 2 * (diagramParams[i].radius - minRadius)
		const sectorLength = calcSectorLength(diagramParams[i].radius, diagramParams[i].angle)
		diagramParams[i].strokeDasharray = `${sectorLength} 100`
		diagramParams[i].sectorLength = sectorLength

		const shifts = [0]

		for (let j = 0; j < i; j++) {
			const dashoffset = diagramParams[i].radius * diagramParams[j].sectorLength / diagramParams[j].radius
			shifts.push(dashoffset)
		}

		const summaryShift = shifts.reduce((acc, shift) => (acc - shift), 0)
		diagramParams[i].strokeDashoffset = summaryShift
	}

	return diagramParams
}