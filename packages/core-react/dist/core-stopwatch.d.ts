import React from 'react';

export interface CoreStopwatchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreStopwatch(props: CoreStopwatchProps): React.ReactElement;
export default CoreStopwatch;
