import React from 'react';

export interface LanSignal2Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignal2: React.FC<LanSignal2Props>;
export default LanSignal2;
