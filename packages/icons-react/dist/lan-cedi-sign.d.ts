import React from 'react';

export interface LanCediSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCediSign: React.FC<LanCediSignProps>;
export default LanCediSign;
