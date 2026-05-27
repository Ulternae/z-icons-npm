import React from 'react';

export interface CoreStopwatchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreStopwatch: React.FC<CoreStopwatchProps>;
export default CoreStopwatch;
