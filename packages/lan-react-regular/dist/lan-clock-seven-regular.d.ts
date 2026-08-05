import React from 'react';

export interface LanClockSevenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockSevenRegular(props: LanClockSevenRegularProps): React.ReactElement;
export default LanClockSevenRegular;
