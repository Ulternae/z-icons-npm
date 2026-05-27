import React from 'react';

export interface CoreJoystickSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreJoystickSolid: React.FC<CoreJoystickSolidProps>;
export default CoreJoystickSolid;
