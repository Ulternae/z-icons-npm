import React from 'react';

export interface LanBellPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellPlusSolid: React.FC<LanBellPlusSolidProps>;
export default LanBellPlusSolid;
