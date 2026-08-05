import React from 'react';

export interface LanDisplayChartUpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDisplayChartUpRegular(props: LanDisplayChartUpRegularProps): React.ReactElement;
export default LanDisplayChartUpRegular;
