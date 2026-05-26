import React from 'react';

export interface LanPegasusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPegasusSolid: React.FC<LanPegasusSolidProps>;
export default LanPegasusSolid;
