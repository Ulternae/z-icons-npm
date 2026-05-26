import React from 'react';

export interface LanTransformerBoltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransformerBoltRegular: React.FC<LanTransformerBoltRegularProps>;
export default LanTransformerBoltRegular;
