import React from 'react';

export interface LanCircleXRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleXRegular: React.FC<LanCircleXRegularProps>;
export default LanCircleXRegular;
