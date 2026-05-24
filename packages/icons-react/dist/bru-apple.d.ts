import React from 'react';

export interface BruAppleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruApple: React.FC<BruAppleProps>;
export default BruApple;
