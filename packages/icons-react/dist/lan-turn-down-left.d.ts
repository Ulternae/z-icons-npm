import React from 'react';

export interface LanTurnDownLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTurnDownLeft: React.FC<LanTurnDownLeftProps>;
export default LanTurnDownLeft;
