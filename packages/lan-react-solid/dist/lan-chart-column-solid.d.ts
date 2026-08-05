import React from 'react';

export interface LanChartColumnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartColumnSolid(props: LanChartColumnSolidProps): React.ReactElement;
export default LanChartColumnSolid;
