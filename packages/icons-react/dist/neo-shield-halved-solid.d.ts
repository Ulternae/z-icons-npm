import React from 'react';

export interface NeoShieldHalvedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoShieldHalvedSolid: React.FC<NeoShieldHalvedSolidProps>;
export default NeoShieldHalvedSolid;
