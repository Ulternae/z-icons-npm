import React from 'react';

export interface LanPawClawsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPawClawsSolid: React.FC<LanPawClawsSolidProps>;
export default LanPawClawsSolid;
