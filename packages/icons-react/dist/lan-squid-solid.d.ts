import React from 'react';

export interface LanSquidSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquidSolid: React.FC<LanSquidSolidProps>;
export default LanSquidSolid;
