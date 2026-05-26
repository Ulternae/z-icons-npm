import React from 'react';

export interface LanLycheeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLychee: React.FC<LanLycheeProps>;
export default LanLychee;
