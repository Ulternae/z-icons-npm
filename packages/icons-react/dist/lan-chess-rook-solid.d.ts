import React from 'react';

export interface LanChessRookSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessRookSolid: React.FC<LanChessRookSolidProps>;
export default LanChessRookSolid;
