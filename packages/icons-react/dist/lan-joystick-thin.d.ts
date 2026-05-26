import React from 'react';

export interface LanJoystickThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJoystickThin: React.FC<LanJoystickThinProps>;
export default LanJoystickThin;
