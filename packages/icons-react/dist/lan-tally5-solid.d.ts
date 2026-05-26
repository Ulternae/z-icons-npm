import React from 'react';

export interface LanTally5SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTally5Solid: React.FC<LanTally5SolidProps>;
export default LanTally5Solid;
