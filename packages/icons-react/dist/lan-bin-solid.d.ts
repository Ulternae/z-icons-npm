import React from 'react';

export interface LanBinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBinSolid: React.FC<LanBinSolidProps>;
export default LanBinSolid;
