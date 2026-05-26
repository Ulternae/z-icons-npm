import React from 'react';

export interface LanBoxCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxCheck: React.FC<LanBoxCheckProps>;
export default LanBoxCheck;
