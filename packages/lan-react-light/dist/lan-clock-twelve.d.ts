import React from 'react';

export interface LanClockTwelveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockTwelve(props: LanClockTwelveProps): React.ReactElement;
export default LanClockTwelve;
