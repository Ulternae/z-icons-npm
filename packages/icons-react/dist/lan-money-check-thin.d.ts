import React from 'react';

export interface LanMoneyCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyCheckThin: React.FC<LanMoneyCheckThinProps>;
export default LanMoneyCheckThin;
