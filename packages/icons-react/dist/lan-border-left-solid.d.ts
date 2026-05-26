import React from 'react';

export interface LanBorderLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderLeftSolid: React.FC<LanBorderLeftSolidProps>;
export default LanBorderLeftSolid;
