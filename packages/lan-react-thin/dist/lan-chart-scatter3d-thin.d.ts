import React from 'react';

export interface LanChartScatter3dThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartScatter3dThin(props: LanChartScatter3dThinProps): React.ReactElement;
export default LanChartScatter3dThin;
