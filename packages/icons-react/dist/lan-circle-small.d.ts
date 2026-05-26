import React from 'react';

export interface LanCircleSmallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleSmall: React.FC<LanCircleSmallProps>;
export default LanCircleSmall;
