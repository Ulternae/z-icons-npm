import React from 'react';

export interface LanTemperatureListRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTemperatureListRegular(props: LanTemperatureListRegularProps): React.ReactElement;
export default LanTemperatureListRegular;
