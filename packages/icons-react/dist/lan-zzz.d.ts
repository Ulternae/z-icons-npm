import React from 'react';

export interface LanZzzProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanZzz: React.FC<LanZzzProps>;
export default LanZzz;
