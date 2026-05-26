import React from 'react';

export interface LanCrownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrownSolid: React.FC<LanCrownSolidProps>;
export default LanCrownSolid;
