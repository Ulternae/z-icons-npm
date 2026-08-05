import React from 'react';

export interface LanTrianglePersonDiggingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrianglePersonDigging(props: LanTrianglePersonDiggingProps): React.ReactElement;
export default LanTrianglePersonDigging;
