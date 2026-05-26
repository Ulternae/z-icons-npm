import React from 'react';

export interface LanGamepadAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGamepadAltRegular: React.FC<LanGamepadAltRegularProps>;
export default LanGamepadAltRegular;
