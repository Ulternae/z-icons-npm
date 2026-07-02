import React from 'react';

export interface CoreJoystickProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreJoystick(props: CoreJoystickProps): React.ReactElement;
export default CoreJoystick;
