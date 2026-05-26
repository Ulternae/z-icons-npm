import React from 'react';

export interface LanTally2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTally2Solid: React.FC<LanTally2SolidProps>;
export default LanTally2Solid;
