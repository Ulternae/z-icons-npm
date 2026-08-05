import React from 'react';

export interface LanDropletPercentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDropletPercentSolid(props: LanDropletPercentSolidProps): React.ReactElement;
export default LanDropletPercentSolid;
