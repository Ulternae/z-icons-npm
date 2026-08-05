import React from 'react';

export interface LanSquareGThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareGThin(props: LanSquareGThinProps): React.ReactElement;
export default LanSquareGThin;
