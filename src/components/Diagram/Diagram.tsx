import React, {useState} from 'react';
import * as S from "../../styles/diagramStyles";
import {createDiagramParams} from "../../lib/createDiagramParams";
import {SectorParam} from "../../types/SectorParams";

const Diagram = () => {
	const initialParams = createDiagramParams()
	const [sectorParams, setSectorParams] = useState<SectorParam[]>(initialParams)

	const handleClick = () => {
		setSectorParams(createDiagramParams())
	}

	return (
		<S.Container>
			<S.Diagram width='500' height='500' viewBox='0 0 50 50' onClick={handleClick}>
				{sectorParams.map(sector => (
					<circle key={sector.id} fill='none' r={sector.radius} cx='50%' cy='50%' stroke={sector.stroke}
									strokeWidth={sector.strokeWidth} strokeDasharray={sector.strokeDasharray}
									strokeDashoffset={sector.strokeDashoffset}/>
				))}
			</S.Diagram>
		</S.Container>
	);
};

export default Diagram;