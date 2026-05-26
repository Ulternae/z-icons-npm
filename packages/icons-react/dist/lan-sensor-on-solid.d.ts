import React from 'react';

export interface LanSensorOnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSensorOnSolid: React.FC<LanSensorOnSolidProps>;
export default LanSensorOnSolid;
