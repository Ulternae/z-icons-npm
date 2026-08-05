import React from 'react';

export interface LanCoffinCrossSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoffinCrossSolid(props: LanCoffinCrossSolidProps): React.ReactElement;
export default LanCoffinCrossSolid;
