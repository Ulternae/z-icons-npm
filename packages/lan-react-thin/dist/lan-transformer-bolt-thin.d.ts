import React from 'react';

export interface LanTransformerBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTransformerBoltThin(props: LanTransformerBoltThinProps): React.ReactElement;
export default LanTransformerBoltThin;
