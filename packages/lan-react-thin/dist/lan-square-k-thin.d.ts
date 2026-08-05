import React from 'react';

export interface LanSquareKThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareKThin(props: LanSquareKThinProps): React.ReactElement;
export default LanSquareKThin;
