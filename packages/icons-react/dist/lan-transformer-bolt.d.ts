import React from 'react';

export interface LanTransformerBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransformerBolt: React.FC<LanTransformerBoltProps>;
export default LanTransformerBolt;
