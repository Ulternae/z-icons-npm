import React from 'react';

export interface LanJoystickRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJoystickRegular(props: LanJoystickRegularProps): React.ReactElement;
export default LanJoystickRegular;
