import React from 'react';

export interface LanDropletPercentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDropletPercentThin(props: LanDropletPercentThinProps): React.ReactElement;
export default LanDropletPercentThin;
