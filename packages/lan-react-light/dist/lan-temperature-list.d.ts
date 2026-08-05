import React from 'react';

export interface LanTemperatureListProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTemperatureList(props: LanTemperatureListProps): React.ReactElement;
export default LanTemperatureList;
