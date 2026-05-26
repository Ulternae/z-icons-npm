import React from 'react';

export interface LanSignal4Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignal4: React.FC<LanSignal4Props>;
export default LanSignal4;
