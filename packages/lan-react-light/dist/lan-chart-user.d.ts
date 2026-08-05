import React from 'react';

export interface LanChartUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartUser(props: LanChartUserProps): React.ReactElement;
export default LanChartUser;
