import React from 'react';

export interface LanDiceD10SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceD10Solid: React.FC<LanDiceD10SolidProps>;
export default LanDiceD10Solid;
