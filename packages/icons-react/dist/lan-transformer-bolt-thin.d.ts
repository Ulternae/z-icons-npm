import React from 'react';

export interface LanTransformerBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransformerBoltThin: React.FC<LanTransformerBoltThinProps>;
export default LanTransformerBoltThin;
