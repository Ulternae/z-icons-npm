import React from 'react';

export interface LanArrowTurnUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowTurnUpSolid: React.FC<LanArrowTurnUpSolidProps>;
export default LanArrowTurnUpSolid;
