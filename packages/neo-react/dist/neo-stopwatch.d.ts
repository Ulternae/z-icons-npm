import React from 'react';

export interface NeoStopwatchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoStopwatch(props: NeoStopwatchProps): React.ReactElement;
export default NeoStopwatch;
