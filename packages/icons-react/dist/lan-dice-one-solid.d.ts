import React from 'react';

export interface LanDiceOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceOneSolid: React.FC<LanDiceOneSolidProps>;
export default LanDiceOneSolid;
