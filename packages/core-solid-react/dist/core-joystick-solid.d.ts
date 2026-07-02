import React from 'react';

export interface CoreJoystickSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreJoystickSolid(props: CoreJoystickSolidProps): React.ReactElement;
export default CoreJoystickSolid;
