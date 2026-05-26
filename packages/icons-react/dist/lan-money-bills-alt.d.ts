import React from 'react';

export interface LanMoneyBillsAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyBillsAlt: React.FC<LanMoneyBillsAltProps>;
export default LanMoneyBillsAlt;
