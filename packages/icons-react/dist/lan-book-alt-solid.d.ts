import React from 'react';

export interface LanBookAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookAltSolid: React.FC<LanBookAltSolidProps>;
export default LanBookAltSolid;
