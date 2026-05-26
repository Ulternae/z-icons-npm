import React from 'react';

export interface LanTurnRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTurnRight: React.FC<LanTurnRightProps>;
export default LanTurnRight;
