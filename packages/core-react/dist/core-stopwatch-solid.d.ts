import React from 'react';

export interface CoreStopwatchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreStopwatchSolid(props: CoreStopwatchSolidProps): React.ReactElement;
export default CoreStopwatchSolid;
