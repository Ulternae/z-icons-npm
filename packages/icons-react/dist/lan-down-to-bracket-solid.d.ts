import React from 'react';

export interface LanDownToBracketSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownToBracketSolid: React.FC<LanDownToBracketSolidProps>;
export default LanDownToBracketSolid;
