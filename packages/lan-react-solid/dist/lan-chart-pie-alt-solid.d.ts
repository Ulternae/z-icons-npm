import React from 'react';

export interface LanChartPieAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartPieAltSolid(props: LanChartPieAltSolidProps): React.ReactElement;
export default LanChartPieAltSolid;
