import React from 'react';

export interface LanDiceD8SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceD8Solid: React.FC<LanDiceD8SolidProps>;
export default LanDiceD8Solid;
