import React from 'react';

export interface LanGamepadRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGamepadRegular: React.FC<LanGamepadRegularProps>;
export default LanGamepadRegular;
