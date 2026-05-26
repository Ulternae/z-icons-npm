import React from 'react';

export interface LanOvenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOven: React.FC<LanOvenProps>;
export default LanOven;
