import React from 'react';

export interface LanBackwardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBackwardSolid(props: LanBackwardSolidProps): React.ReactElement;
export default LanBackwardSolid;
