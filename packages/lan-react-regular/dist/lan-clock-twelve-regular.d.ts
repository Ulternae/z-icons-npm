import React from 'react';

export interface LanClockTwelveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockTwelveRegular(props: LanClockTwelveRegularProps): React.ReactElement;
export default LanClockTwelveRegular;
