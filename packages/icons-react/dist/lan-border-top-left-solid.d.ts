import React from 'react';

export interface LanBorderTopLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderTopLeftSolid: React.FC<LanBorderTopLeftSolidProps>;
export default LanBorderTopLeftSolid;
