import React from 'react';

export interface LanChartUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartUserRegular(props: LanChartUserRegularProps): React.ReactElement;
export default LanChartUserRegular;
