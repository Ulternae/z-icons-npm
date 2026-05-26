import React from 'react';

export interface LanSteakProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSteak: React.FC<LanSteakProps>;
export default LanSteak;
