import React from 'react';

export interface MinaClockTwelveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockTwelve(props: MinaClockTwelveProps): React.ReactElement;
export default MinaClockTwelve;
