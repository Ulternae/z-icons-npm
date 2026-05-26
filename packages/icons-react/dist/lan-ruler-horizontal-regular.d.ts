import React from 'react';

export interface LanRulerHorizontalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRulerHorizontalRegular: React.FC<LanRulerHorizontalRegularProps>;
export default LanRulerHorizontalRegular;
