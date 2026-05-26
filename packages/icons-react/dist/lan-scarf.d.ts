import React from 'react';

export interface LanScarfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScarf: React.FC<LanScarfProps>;
export default LanScarf;
