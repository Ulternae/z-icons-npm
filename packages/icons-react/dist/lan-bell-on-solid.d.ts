import React from 'react';

export interface LanBellOnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellOnSolid: React.FC<LanBellOnSolidProps>;
export default LanBellOnSolid;
