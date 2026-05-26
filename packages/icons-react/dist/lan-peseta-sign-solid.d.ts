import React from 'react';

export interface LanPesetaSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPesetaSignSolid: React.FC<LanPesetaSignSolidProps>;
export default LanPesetaSignSolid;
