import React from 'react';

export interface LanCircleJRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleJRegular: React.FC<LanCircleJRegularProps>;
export default LanCircleJRegular;
