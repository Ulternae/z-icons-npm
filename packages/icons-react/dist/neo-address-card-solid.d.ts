import React from 'react';

export interface NeoAddressCardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoAddressCardSolid: React.FC<NeoAddressCardSolidProps>;
export default NeoAddressCardSolid;
