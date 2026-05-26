import React from 'react';

export interface LanShovelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShovel: React.FC<LanShovelProps>;
export default LanShovel;
