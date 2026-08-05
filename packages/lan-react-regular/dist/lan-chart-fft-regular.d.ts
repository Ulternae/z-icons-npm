import React from 'react';

export interface LanChartFftRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartFftRegular(props: LanChartFftRegularProps): React.ReactElement;
export default LanChartFftRegular;
