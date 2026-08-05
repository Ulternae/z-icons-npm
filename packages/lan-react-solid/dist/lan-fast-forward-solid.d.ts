import React from 'react';

export interface LanFastForwardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFastForwardSolid(props: LanFastForwardSolidProps): React.ReactElement;
export default LanFastForwardSolid;
