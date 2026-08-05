import React from 'react';

export interface LanSunPlantWiltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunPlantWiltSolid(props: LanSunPlantWiltSolidProps): React.ReactElement;
export default LanSunPlantWiltSolid;
