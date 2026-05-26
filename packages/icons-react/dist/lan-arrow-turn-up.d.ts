import React from 'react';

export interface LanArrowTurnUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowTurnUp: React.FC<LanArrowTurnUpProps>;
export default LanArrowTurnUp;
