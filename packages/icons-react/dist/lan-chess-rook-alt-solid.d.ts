import React from 'react';

export interface LanChessRookAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessRookAltSolid: React.FC<LanChessRookAltSolidProps>;
export default LanChessRookAltSolid;
