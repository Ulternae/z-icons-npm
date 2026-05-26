import React from 'react';

export interface LanDiamondTurnRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiamondTurnRight: React.FC<LanDiamondTurnRightProps>;
export default LanDiamondTurnRight;
