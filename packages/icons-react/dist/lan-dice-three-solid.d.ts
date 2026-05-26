import React from 'react';

export interface LanDiceThreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiceThreeSolid: React.FC<LanDiceThreeSolidProps>;
export default LanDiceThreeSolid;
