import React from 'react';

export interface LanTransformerBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTransformerBolt(props: LanTransformerBoltProps): React.ReactElement;
export default LanTransformerBolt;
