import React from 'react';

export interface LanBoldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoldSolid: React.FC<LanBoldSolidProps>;
export default LanBoldSolid;
