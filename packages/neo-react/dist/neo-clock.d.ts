import React from 'react';

export interface NeoClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoClock(props: NeoClockProps): React.ReactElement;
export default NeoClock;
