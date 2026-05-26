import React from 'react';

export interface LanEurozoneSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEurozoneSign: React.FC<LanEurozoneSignProps>;
export default LanEurozoneSign;
