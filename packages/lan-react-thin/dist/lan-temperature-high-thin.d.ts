import React from 'react';

export interface LanTemperatureHighThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTemperatureHighThin(props: LanTemperatureHighThinProps): React.ReactElement;
export default LanTemperatureHighThin;
