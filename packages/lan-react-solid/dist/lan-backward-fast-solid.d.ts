import React from 'react';

export interface LanBackwardFastSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBackwardFastSolid(props: LanBackwardFastSolidProps): React.ReactElement;
export default LanBackwardFastSolid;
