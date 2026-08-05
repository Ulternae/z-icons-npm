import React from 'react';

export interface LanTemperatureHighSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTemperatureHighSolid(props: LanTemperatureHighSolidProps): React.ReactElement;
export default LanTemperatureHighSolid;
