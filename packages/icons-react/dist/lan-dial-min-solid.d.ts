import React from 'react';

export interface LanDialMinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialMinSolid: React.FC<LanDialMinSolidProps>;
export default LanDialMinSolid;
