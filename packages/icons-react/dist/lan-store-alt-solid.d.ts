import React from 'react';

export interface LanStoreAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStoreAltSolid: React.FC<LanStoreAltSolidProps>;
export default LanStoreAltSolid;
