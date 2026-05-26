import React from 'react';

export interface LanCircleIRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleIRegular: React.FC<LanCircleIRegularProps>;
export default LanCircleIRegular;
