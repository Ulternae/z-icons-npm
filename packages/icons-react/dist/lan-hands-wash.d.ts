import React from 'react';

export interface LanHandsWashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsWash: React.FC<LanHandsWashProps>;
export default LanHandsWash;
