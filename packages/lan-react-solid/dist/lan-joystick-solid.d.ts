import React from 'react';

export interface LanJoystickSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJoystickSolid(props: LanJoystickSolidProps): React.ReactElement;
export default LanJoystickSolid;
