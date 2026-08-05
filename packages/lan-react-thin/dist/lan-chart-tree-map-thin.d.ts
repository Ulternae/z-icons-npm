import React from 'react';

export interface LanChartTreeMapThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartTreeMapThin(props: LanChartTreeMapThinProps): React.ReactElement;
export default LanChartTreeMapThin;
