import React from 'react';

export interface LanJoystickProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJoystick(props: LanJoystickProps): React.ReactElement;
export default LanJoystick;
