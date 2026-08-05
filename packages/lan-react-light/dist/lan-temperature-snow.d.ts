import React from 'react';

export interface LanTemperatureSnowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTemperatureSnow(props: LanTemperatureSnowProps): React.ReactElement;
export default LanTemperatureSnow;
