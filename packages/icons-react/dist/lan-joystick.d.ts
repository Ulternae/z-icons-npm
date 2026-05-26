import React from 'react';

export interface LanJoystickProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJoystick: React.FC<LanJoystickProps>;
export default LanJoystick;
