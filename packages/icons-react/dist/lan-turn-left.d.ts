import React from 'react';

export interface LanTurnLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTurnLeft: React.FC<LanTurnLeftProps>;
export default LanTurnLeft;
