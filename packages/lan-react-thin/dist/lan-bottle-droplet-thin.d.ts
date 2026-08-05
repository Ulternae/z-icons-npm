import React from 'react';

export interface LanBottleDropletThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBottleDropletThin(props: LanBottleDropletThinProps): React.ReactElement;
export default LanBottleDropletThin;
