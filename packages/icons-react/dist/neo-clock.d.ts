import React from 'react';

export interface NeoClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoClock: React.FC<NeoClockProps>;
export default NeoClock;
