import React from 'react';

export interface CoreStopwatchRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreStopwatchRegularDuo(props: CoreStopwatchRegularDuoProps): React.ReactElement;
export default CoreStopwatchRegularDuo;
