import React from 'react';

export interface NeoStopwatchRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoStopwatchRegularDuo(props: NeoStopwatchRegularDuoProps): React.ReactElement;
export default NeoStopwatchRegularDuo;
