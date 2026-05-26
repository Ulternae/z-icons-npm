import React from 'react';

export interface LanGrid3Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrid3: React.FC<LanGrid3Props>;
export default LanGrid3;
