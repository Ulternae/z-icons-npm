import React from 'react';

export interface LanDropletPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDropletPlusSolid(props: LanDropletPlusSolidProps): React.ReactElement;
export default LanDropletPlusSolid;
