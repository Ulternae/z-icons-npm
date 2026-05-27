import React from 'react';

export interface CoreStopwatchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreStopwatchSolid: React.FC<CoreStopwatchSolidProps>;
export default CoreStopwatchSolid;
