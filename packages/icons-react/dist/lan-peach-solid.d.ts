import React from 'react';

export interface LanPeachSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeachSolid: React.FC<LanPeachSolidProps>;
export default LanPeachSolid;
