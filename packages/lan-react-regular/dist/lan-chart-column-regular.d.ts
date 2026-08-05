import React from 'react';

export interface LanChartColumnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartColumnRegular(props: LanChartColumnRegularProps): React.ReactElement;
export default LanChartColumnRegular;
