import React from 'react';

export interface LanDiamonds4SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiamonds4Solid(props: LanDiamonds4SolidProps): React.ReactElement;
export default LanDiamonds4Solid;
