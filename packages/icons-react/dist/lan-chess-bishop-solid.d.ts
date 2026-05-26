import React from 'react';

export interface LanChessBishopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessBishopSolid: React.FC<LanChessBishopSolidProps>;
export default LanChessBishopSolid;
