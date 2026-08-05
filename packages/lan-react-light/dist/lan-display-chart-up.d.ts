import React from 'react';

export interface LanDisplayChartUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDisplayChartUp(props: LanDisplayChartUpProps): React.ReactElement;
export default LanDisplayChartUp;
