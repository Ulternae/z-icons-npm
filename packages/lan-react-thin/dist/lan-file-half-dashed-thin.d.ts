import React from 'react';

export interface LanFileHalfDashedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileHalfDashedThin(props: LanFileHalfDashedThinProps): React.ReactElement;
export default LanFileHalfDashedThin;
