import React from 'react';

export interface LanBorderTopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderTopSolid: React.FC<LanBorderTopSolidProps>;
export default LanBorderTopSolid;
