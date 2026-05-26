import React from 'react';

export interface LanTurnLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTurnLeftSolid: React.FC<LanTurnLeftSolidProps>;
export default LanTurnLeftSolid;
