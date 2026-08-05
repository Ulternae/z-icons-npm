import React from 'react';

export interface LanTransformerBoltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTransformerBoltRegular(props: LanTransformerBoltRegularProps): React.ReactElement;
export default LanTransformerBoltRegular;
