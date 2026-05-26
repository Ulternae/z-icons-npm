import React from 'react';

export interface LanCameraClockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraClockSolid: React.FC<LanCameraClockSolidProps>;
export default LanCameraClockSolid;
