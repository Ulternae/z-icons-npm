import React from 'react';

export interface LanIntersectionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIntersectionRegular: React.FC<LanIntersectionRegularProps>;
export default LanIntersectionRegular;
