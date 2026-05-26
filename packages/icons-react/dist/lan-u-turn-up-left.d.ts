import React from 'react';

export interface LanUTurnUpLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUTurnUpLeft: React.FC<LanUTurnUpLeftProps>;
export default LanUTurnUpLeft;
