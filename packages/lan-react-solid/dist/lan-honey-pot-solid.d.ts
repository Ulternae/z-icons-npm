import React from 'react';

export interface LanHoneyPotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHoneyPotSolid(props: LanHoneyPotSolidProps): React.ReactElement;
export default LanHoneyPotSolid;
