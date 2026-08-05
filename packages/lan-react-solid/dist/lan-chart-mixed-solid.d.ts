import React from 'react';

export interface LanChartMixedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartMixedSolid(props: LanChartMixedSolidProps): React.ReactElement;
export default LanChartMixedSolid;
