import React from 'react';

export interface LanSunPlantWiltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunPlantWilt(props: LanSunPlantWiltProps): React.ReactElement;
export default LanSunPlantWilt;
