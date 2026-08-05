import React from 'react';

export interface LanTemperatureHotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTemperatureHot(props: LanTemperatureHotProps): React.ReactElement;
export default LanTemperatureHot;
