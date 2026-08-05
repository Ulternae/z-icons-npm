import React from 'react';

export interface LanBottleDropletRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBottleDropletRegular(props: LanBottleDropletRegularProps): React.ReactElement;
export default LanBottleDropletRegular;
