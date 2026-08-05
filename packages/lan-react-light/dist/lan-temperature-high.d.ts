import React from 'react';

export interface LanTemperatureHighProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTemperatureHigh(props: LanTemperatureHighProps): React.ReactElement;
export default LanTemperatureHigh;
