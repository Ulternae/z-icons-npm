import React from 'react';

export interface LanCrossSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrossSolid(props: LanCrossSolidProps): React.ReactElement;
export default LanCrossSolid;
