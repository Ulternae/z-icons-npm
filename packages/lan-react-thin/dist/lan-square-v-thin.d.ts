import React from 'react';

export interface LanSquareVThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareVThin(props: LanSquareVThinProps): React.ReactElement;
export default LanSquareVThin;
