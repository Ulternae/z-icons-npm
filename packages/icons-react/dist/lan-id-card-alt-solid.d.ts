import React from 'react';

export interface LanIdCardAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIdCardAltSolid: React.FC<LanIdCardAltSolidProps>;
export default LanIdCardAltSolid;
