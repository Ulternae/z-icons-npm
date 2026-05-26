import React from 'react';

export interface LanBorderInnerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderInnerSolid: React.FC<LanBorderInnerSolidProps>;
export default LanBorderInnerSolid;
