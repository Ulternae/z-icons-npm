import React from 'react';

export interface LanHashtagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHashtagSolid: React.FC<LanHashtagSolidProps>;
export default LanHashtagSolid;
