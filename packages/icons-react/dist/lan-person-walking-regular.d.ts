import React from 'react';

export interface LanPersonWalkingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonWalkingRegular: React.FC<LanPersonWalkingRegularProps>;
export default LanPersonWalkingRegular;
