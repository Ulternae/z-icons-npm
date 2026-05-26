import React from 'react';

export interface LanTeddyBearProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTeddyBear: React.FC<LanTeddyBearProps>;
export default LanTeddyBear;
