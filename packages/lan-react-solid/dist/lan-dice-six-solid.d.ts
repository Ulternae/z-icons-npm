import React from 'react';

export interface LanDiceSixSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceSixSolid(props: LanDiceSixSolidProps): React.ReactElement;
export default LanDiceSixSolid;
