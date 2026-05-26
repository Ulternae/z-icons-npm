import React from 'react';

export interface LanBookOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookOpenSolid: React.FC<LanBookOpenSolidProps>;
export default LanBookOpenSolid;
