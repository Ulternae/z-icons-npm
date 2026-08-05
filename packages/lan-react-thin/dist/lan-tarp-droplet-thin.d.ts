import React from 'react';

export interface LanTarpDropletThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTarpDropletThin(props: LanTarpDropletThinProps): React.ReactElement;
export default LanTarpDropletThin;
