import React from 'react';

export interface LanDiceD12SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceD12Solid: React.FC<LanDiceD12SolidProps>;
export default LanDiceD12Solid;
