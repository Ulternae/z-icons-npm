import React from 'react';

export interface LanJoystickRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJoystickRegular: React.FC<LanJoystickRegularProps>;
export default LanJoystickRegular;
