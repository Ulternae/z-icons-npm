import React from 'react';

export interface LanChartFftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartFft(props: LanChartFftProps): React.ReactElement;
export default LanChartFft;
