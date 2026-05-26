import React from 'react';

export interface LanChessBoardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessBoardSolid: React.FC<LanChessBoardSolidProps>;
export default LanChessBoardSolid;
