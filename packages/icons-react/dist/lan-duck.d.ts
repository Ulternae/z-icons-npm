import React from 'react';

export interface LanDuckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDuck: React.FC<LanDuckProps>;
export default LanDuck;
