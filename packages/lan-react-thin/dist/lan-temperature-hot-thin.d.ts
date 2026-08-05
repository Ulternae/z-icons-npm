import React from 'react';

export interface LanTemperatureHotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTemperatureHotThin(props: LanTemperatureHotThinProps): React.ReactElement;
export default LanTemperatureHotThin;
