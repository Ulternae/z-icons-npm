import React from 'react';

export interface LanZapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanZap: React.FC<LanZapProps>;
export default LanZap;
