import React from 'react';

export interface LanTemperatureSnowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTemperatureSnowRegular(props: LanTemperatureSnowRegularProps): React.ReactElement;
export default LanTemperatureSnowRegular;
