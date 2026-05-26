import React from 'react';

export interface LanTally4SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTally4Solid: React.FC<LanTally4SolidProps>;
export default LanTally4Solid;
