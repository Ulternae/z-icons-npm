import React from 'react';

export interface LanMoneyCheckAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyCheckAlt: React.FC<LanMoneyCheckAltProps>;
export default LanMoneyCheckAlt;
