import React from 'react';

export interface NeoShieldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoShieldSolid: React.FC<NeoShieldSolidProps>;
export default NeoShieldSolid;
