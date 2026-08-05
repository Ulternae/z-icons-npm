import React from 'react';

export interface LanDropletPercentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDropletPercent(props: LanDropletPercentProps): React.ReactElement;
export default LanDropletPercent;
