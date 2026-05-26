import React from 'react';

export interface LanBellSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellSolid: React.FC<LanBellSolidProps>;
export default LanBellSolid;
