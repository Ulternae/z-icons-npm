import React from 'react';

export interface LanBagelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBagel: React.FC<LanBagelProps>;
export default LanBagel;
