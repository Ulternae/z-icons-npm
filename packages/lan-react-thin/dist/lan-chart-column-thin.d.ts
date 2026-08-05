import React from 'react';

export interface LanChartColumnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartColumnThin(props: LanChartColumnThinProps): React.ReactElement;
export default LanChartColumnThin;
