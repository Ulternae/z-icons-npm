import React from 'react';

export interface LanBorderAllSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBorderAllSolid: React.FC<LanBorderAllSolidProps>;
export default LanBorderAllSolid;
