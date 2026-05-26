import React from 'react';

export interface LanCupStrawProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCupStraw: React.FC<LanCupStrawProps>;
export default LanCupStraw;
