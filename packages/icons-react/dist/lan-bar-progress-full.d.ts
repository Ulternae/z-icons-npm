import React from 'react';

export interface LanBarProgressFullProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarProgressFull: React.FC<LanBarProgressFullProps>;
export default LanBarProgressFull;
