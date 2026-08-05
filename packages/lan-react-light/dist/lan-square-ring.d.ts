import React from 'react';

export interface LanSquareRingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareRing(props: LanSquareRingProps): React.ReactElement;
export default LanSquareRing;
