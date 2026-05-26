import React from 'react';

export interface LanFileOdfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileOdfSolid: React.FC<LanFileOdfSolidProps>;
export default LanFileOdfSolid;
