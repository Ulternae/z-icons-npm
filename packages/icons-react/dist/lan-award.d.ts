import React from 'react';

export interface LanAwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAward: React.FC<LanAwardProps>;
export default LanAward;
