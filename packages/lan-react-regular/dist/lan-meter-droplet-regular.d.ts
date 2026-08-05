import React from 'react';

export interface LanMeterDropletRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMeterDropletRegular(props: LanMeterDropletRegularProps): React.ReactElement;
export default LanMeterDropletRegular;
