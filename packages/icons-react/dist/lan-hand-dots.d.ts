import React from 'react';

export interface LanHandDotsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandDots: React.FC<LanHandDotsProps>;
export default LanHandDots;
