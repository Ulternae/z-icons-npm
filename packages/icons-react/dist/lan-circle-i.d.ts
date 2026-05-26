import React from 'react';

export interface LanCircleIProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleI: React.FC<LanCircleIProps>;
export default LanCircleI;
