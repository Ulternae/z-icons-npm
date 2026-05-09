import React from 'react';

export interface MinaClockTwelveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockTwelve: React.FC<MinaClockTwelveProps>;
export default MinaClockTwelve;
