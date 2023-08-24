import {maxRadius, minRadius} from "../constants/constants";

export const generateSectorsParams = () => {

	const countOfSectors = Math.round(Math.random() * 7 + 1)

	const outputParams = []

	for (let i = 0; i < countOfSectors; i++) {
		const angleProportion = Math.random()
		const radius = Math.random() * (maxRadius - minRadius) + minRadius

		const param = {
			id: 0,
			angle: angleProportion,
			radius,
			stroke: '',
			strokeWidth: 0,
			strokeDasharray: '',
			sectorLength: 0,
			strokeDashoffset: 0,
		}
		outputParams.push(param)
	}

	const summaryProportion = outputParams.reduce((acc, param) => (param.angle + acc), 0)

	outputParams.forEach(param => {
		param.angle = 360 * param.angle / summaryProportion  // replace proportions to degrees
	})

	return outputParams
}