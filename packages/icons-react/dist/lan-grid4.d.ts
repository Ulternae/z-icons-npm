import React from 'react';

export interface LanGrid4Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrid4: React.FC<LanGrid4Props>;
export default LanGrid4;
