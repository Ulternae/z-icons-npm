import React from 'react';

export interface LanBorderRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderRightSolid: React.FC<LanBorderRightSolidProps>;
export default LanBorderRightSolid;
