import React from 'react';

export interface LanCatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCat: React.FC<LanCatProps>;
export default LanCat;
