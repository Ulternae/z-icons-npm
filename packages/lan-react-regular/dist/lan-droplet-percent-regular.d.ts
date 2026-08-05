import React from 'react';

export interface LanDropletPercentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDropletPercentRegular(props: LanDropletPercentRegularProps): React.ReactElement;
export default LanDropletPercentRegular;
