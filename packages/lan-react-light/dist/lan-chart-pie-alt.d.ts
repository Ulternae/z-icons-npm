import React from 'react';

export interface LanChartPieAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartPieAlt(props: LanChartPieAltProps): React.ReactElement;
export default LanChartPieAlt;
