import React from 'react';

export interface LanSquareYThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareYThin(props: LanSquareYThinProps): React.ReactElement;
export default LanSquareYThin;
