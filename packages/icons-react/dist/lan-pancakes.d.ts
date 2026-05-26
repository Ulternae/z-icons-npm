import React from 'react';

export interface LanPancakesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPancakes: React.FC<LanPancakesProps>;
export default LanPancakes;
