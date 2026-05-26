import React from 'react';

export interface LanGripDotsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGripDots: React.FC<LanGripDotsProps>;
export default LanGripDots;
