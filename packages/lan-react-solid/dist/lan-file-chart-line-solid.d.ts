import React from 'react';

export interface LanFileChartLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileChartLineSolid(props: LanFileChartLineSolidProps): React.ReactElement;
export default LanFileChartLineSolid;
