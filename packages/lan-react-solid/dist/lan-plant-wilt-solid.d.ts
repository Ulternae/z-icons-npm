import React from 'react';

export interface LanPlantWiltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlantWiltSolid(props: LanPlantWiltSolidProps): React.ReactElement;
export default LanPlantWiltSolid;
