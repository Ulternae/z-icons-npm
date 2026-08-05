import React from 'react';

export interface LanMeterDropletThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMeterDropletThin(props: LanMeterDropletThinProps): React.ReactElement;
export default LanMeterDropletThin;
