import React from 'react';

export interface LanTemperatureArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTemperatureArrowDown(props: LanTemperatureArrowDownProps): React.ReactElement;
export default LanTemperatureArrowDown;
