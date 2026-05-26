import React from 'react';

export interface LanTally3SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTally3Solid: React.FC<LanTally3SolidProps>;
export default LanTally3Solid;
