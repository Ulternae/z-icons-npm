import React from 'react';

export interface LanDiceD6SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceD6Solid: React.FC<LanDiceD6SolidProps>;
export default LanDiceD6Solid;
