import React from 'react';

export interface LanJoystickSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJoystickSolid: React.FC<LanJoystickSolidProps>;
export default LanJoystickSolid;
