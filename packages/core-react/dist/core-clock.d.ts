import React from 'react';

export interface CoreClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreClock(props: CoreClockProps): React.ReactElement;
export default CoreClock;
