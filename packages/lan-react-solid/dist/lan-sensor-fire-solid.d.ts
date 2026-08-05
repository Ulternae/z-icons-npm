import React from 'react';

export interface LanSensorFireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSensorFireSolid(props: LanSensorFireSolidProps): React.ReactElement;
export default LanSensorFireSolid;
