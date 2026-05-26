import React from 'react';

export interface LanFileEpsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileEps: React.FC<LanFileEpsProps>;
export default LanFileEps;
