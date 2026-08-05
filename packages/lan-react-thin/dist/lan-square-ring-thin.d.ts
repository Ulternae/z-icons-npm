import React from 'react';

export interface LanSquareRingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareRingThin(props: LanSquareRingThinProps): React.ReactElement;
export default LanSquareRingThin;
