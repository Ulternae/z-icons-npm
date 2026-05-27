import React from 'react';

export interface NeoShieldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoShield: React.FC<NeoShieldProps>;
export default NeoShield;
