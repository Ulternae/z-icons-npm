import React from 'react';

export interface LanChartLineDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartLineDown(props: LanChartLineDownProps): React.ReactElement;
export default LanChartLineDown;
