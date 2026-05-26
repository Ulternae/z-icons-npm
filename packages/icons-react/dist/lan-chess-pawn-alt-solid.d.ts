import React from 'react';

export interface LanChessPawnAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessPawnAltSolid: React.FC<LanChessPawnAltSolidProps>;
export default LanChessPawnAltSolid;
