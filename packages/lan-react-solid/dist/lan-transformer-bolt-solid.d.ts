import React from 'react';

export interface LanTransformerBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTransformerBoltSolid(props: LanTransformerBoltSolidProps): React.ReactElement;
export default LanTransformerBoltSolid;
