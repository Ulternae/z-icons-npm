import React from 'react';

export interface LanGlobeStandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlobeStandSolid(props: LanGlobeStandSolidProps): React.ReactElement;
export default LanGlobeStandSolid;
