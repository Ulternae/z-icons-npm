import React from 'react';

export interface LanTemperatureArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTemperatureArrowUp(props: LanTemperatureArrowUpProps): React.ReactElement;
export default LanTemperatureArrowUp;
