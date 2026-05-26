import React from 'react';

export interface LanAddressCardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAddressCardSolid: React.FC<LanAddressCardSolidProps>;
export default LanAddressCardSolid;
