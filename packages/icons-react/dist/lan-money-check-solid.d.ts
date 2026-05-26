import React from 'react';

export interface LanMoneyCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyCheckSolid: React.FC<LanMoneyCheckSolidProps>;
export default LanMoneyCheckSolid;
