import React from 'react';

export interface LanTemperatureListThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTemperatureListThin(props: LanTemperatureListThinProps): React.ReactElement;
export default LanTemperatureListThin;
