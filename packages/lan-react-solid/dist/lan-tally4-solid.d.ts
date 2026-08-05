import React from 'react';

export interface LanTally4SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTally4Solid(props: LanTally4SolidProps): React.ReactElement;
export default LanTally4Solid;
