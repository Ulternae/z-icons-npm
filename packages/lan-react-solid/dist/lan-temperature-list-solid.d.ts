import React from 'react';

export interface LanTemperatureListSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTemperatureListSolid(props: LanTemperatureListSolidProps): React.ReactElement;
export default LanTemperatureListSolid;
