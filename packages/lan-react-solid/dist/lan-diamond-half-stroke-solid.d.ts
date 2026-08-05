import React from 'react';

export interface LanDiamondHalfStrokeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiamondHalfStrokeSolid(props: LanDiamondHalfStrokeSolidProps): React.ReactElement;
export default LanDiamondHalfStrokeSolid;
