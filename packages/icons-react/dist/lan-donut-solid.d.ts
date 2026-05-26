import React from 'react';

export interface LanDonutSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDonutSolid: React.FC<LanDonutSolidProps>;
export default LanDonutSolid;
