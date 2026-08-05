import React from 'react';

export interface LanSquareRThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareRThin(props: LanSquareRThinProps): React.ReactElement;
export default LanSquareRThin;
