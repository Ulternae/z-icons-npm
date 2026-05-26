import React from 'react';

export interface LanStopwatch20Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStopwatch20: React.FC<LanStopwatch20Props>;
export default LanStopwatch20;
