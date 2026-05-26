import React from 'react';

export interface LanSwordProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSword: React.FC<LanSwordProps>;
export default LanSword;
