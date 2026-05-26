import React from 'react';

export interface LanDiceD4SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceD4Solid: React.FC<LanDiceD4SolidProps>;
export default LanDiceD4Solid;
