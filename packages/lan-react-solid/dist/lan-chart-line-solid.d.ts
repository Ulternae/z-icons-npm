import React from 'react';

export interface LanChartLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartLineSolid(props: LanChartLineSolidProps): React.ReactElement;
export default LanChartLineSolid;
