import React from 'react';

export interface LanChartFftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartFftSolid(props: LanChartFftSolidProps): React.ReactElement;
export default LanChartFftSolid;
