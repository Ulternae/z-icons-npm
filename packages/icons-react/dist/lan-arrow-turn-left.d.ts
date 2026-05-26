import React from 'react';

export interface LanArrowTurnLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowTurnLeft: React.FC<LanArrowTurnLeftProps>;
export default LanArrowTurnLeft;
