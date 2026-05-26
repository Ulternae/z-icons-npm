import React from 'react';

export interface LanDiceD20SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceD20Solid: React.FC<LanDiceD20SolidProps>;
export default LanDiceD20Solid;
