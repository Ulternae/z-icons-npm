import React from 'react';

export interface LanAreaChartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAreaChartRegular(props: LanAreaChartRegularProps): React.ReactElement;
export default LanAreaChartRegular;
