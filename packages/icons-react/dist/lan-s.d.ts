import React from 'react';

export interface LanSProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanS: React.FC<LanSProps>;
export default LanS;
