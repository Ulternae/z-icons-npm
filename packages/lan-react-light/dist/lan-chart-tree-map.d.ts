import React from 'react';

export interface LanChartTreeMapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartTreeMap(props: LanChartTreeMapProps): React.ReactElement;
export default LanChartTreeMap;
