import React from 'react';

export interface LanBorderOuterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderOuterSolid: React.FC<LanBorderOuterSolidProps>;
export default LanBorderOuterSolid;
