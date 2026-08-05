import React from 'react';

export interface NeoStopwatchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoStopwatchSolid(props: NeoStopwatchSolidProps): React.ReactElement;
export default NeoStopwatchSolid;
