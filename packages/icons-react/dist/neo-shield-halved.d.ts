import React from 'react';

export interface NeoShieldHalvedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoShieldHalved: React.FC<NeoShieldHalvedProps>;
export default NeoShieldHalved;
