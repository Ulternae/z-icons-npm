import React from 'react';

export interface LanDialMaxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialMaxSolid: React.FC<LanDialMaxSolidProps>;
export default LanDialMaxSolid;
