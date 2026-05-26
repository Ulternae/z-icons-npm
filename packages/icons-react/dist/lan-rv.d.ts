import React from 'react';

export interface LanRvProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRv: React.FC<LanRvProps>;
export default LanRv;
