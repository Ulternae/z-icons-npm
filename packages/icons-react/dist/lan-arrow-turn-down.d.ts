import React from 'react';

export interface LanArrowTurnDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowTurnDown: React.FC<LanArrowTurnDownProps>;
export default LanArrowTurnDown;
