import React from 'react';

export interface LanPolishZlotySignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPolishZlotySign: React.FC<LanPolishZlotySignProps>;
export default LanPolishZlotySign;
