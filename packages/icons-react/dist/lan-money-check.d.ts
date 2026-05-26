import React from 'react';

export interface LanMoneyCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyCheck: React.FC<LanMoneyCheckProps>;
export default LanMoneyCheck;
