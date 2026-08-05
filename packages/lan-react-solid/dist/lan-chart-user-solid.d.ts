import React from 'react';

export interface LanChartUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartUserSolid(props: LanChartUserSolidProps): React.ReactElement;
export default LanChartUserSolid;
