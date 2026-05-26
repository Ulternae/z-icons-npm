import React from 'react';

export interface LanFlowerDaffodilProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlowerDaffodil: React.FC<LanFlowerDaffodilProps>;
export default LanFlowerDaffodil;
