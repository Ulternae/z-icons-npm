import React from 'react';

export interface LanCompassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCompassSolid(props: LanCompassSolidProps): React.ReactElement;
export default LanCompassSolid;
