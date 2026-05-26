import React from 'react';

export interface LanTransformerBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransformerBoltSolid: React.FC<LanTransformerBoltSolidProps>;
export default LanTransformerBoltSolid;
