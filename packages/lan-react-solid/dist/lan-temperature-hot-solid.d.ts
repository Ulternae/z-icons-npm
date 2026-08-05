import React from 'react';

export interface LanTemperatureHotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTemperatureHotSolid(props: LanTemperatureHotSolidProps): React.ReactElement;
export default LanTemperatureHotSolid;
