import React from 'react';

export interface LanPlantWiltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlantWilt(props: LanPlantWiltProps): React.ReactElement;
export default LanPlantWilt;
