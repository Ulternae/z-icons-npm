import React from 'react';

export interface LanMeterDropletRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMeterDropletRegular: React.FC<LanMeterDropletRegularProps>;
export default LanMeterDropletRegular;
