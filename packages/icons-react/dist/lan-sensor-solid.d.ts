import React from 'react';

export interface LanSensorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSensorSolid: React.FC<LanSensorSolidProps>;
export default LanSensorSolid;
