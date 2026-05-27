import React from 'react';

export interface NeoStopwatchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoStopwatch: React.FC<NeoStopwatchProps>;
export default NeoStopwatch;
