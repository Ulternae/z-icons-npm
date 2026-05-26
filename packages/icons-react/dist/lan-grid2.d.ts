import React from 'react';

export interface LanGrid2Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrid2: React.FC<LanGrid2Props>;
export default LanGrid2;
