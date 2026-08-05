import React from 'react';

export interface LanDisplayChartUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDisplayChartUpThin(props: LanDisplayChartUpThinProps): React.ReactElement;
export default LanDisplayChartUpThin;
