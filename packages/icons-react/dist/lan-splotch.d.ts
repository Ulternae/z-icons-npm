import React from 'react';

export interface LanSplotchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSplotch: React.FC<LanSplotchProps>;
export default LanSplotch;
