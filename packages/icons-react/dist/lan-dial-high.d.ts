import React from 'react';

export interface LanDialHighProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialHigh: React.FC<LanDialHighProps>;
export default LanDialHigh;
