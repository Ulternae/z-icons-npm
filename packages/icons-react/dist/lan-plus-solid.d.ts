import React from 'react';

export interface LanPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlusSolid: React.FC<LanPlusSolidProps>;
export default LanPlusSolid;
