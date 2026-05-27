import React from 'react';

export interface CoreJoystickProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreJoystick: React.FC<CoreJoystickProps>;
export default CoreJoystick;
