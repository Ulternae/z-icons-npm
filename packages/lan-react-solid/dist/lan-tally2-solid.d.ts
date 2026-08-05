import React from 'react';

export interface LanTally2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTally2Solid(props: LanTally2SolidProps): React.ReactElement;
export default LanTally2Solid;
