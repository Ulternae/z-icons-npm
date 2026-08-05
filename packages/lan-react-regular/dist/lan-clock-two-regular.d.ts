import React from 'react';

export interface LanClockTwoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockTwoRegular(props: LanClockTwoRegularProps): React.ReactElement;
export default LanClockTwoRegular;
