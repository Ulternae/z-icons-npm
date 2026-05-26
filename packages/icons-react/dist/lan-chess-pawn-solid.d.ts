import React from 'react';

export interface LanChessPawnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessPawnSolid: React.FC<LanChessPawnSolidProps>;
export default LanChessPawnSolid;
