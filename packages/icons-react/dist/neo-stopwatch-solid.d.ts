import React from 'react';

export interface NeoStopwatchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoStopwatchSolid: React.FC<NeoStopwatchSolidProps>;
export default NeoStopwatchSolid;
