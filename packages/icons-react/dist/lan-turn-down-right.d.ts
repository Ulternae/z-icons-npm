import React from 'react';

export interface LanTurnDownRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTurnDownRight: React.FC<LanTurnDownRightProps>;
export default LanTurnDownRight;
