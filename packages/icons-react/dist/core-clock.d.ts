import React from 'react';

export interface CoreClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreClock: React.FC<CoreClockProps>;
export default CoreClock;
