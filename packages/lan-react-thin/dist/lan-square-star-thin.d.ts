import React from 'react';

export interface LanSquareStarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareStarThin(props: LanSquareStarThinProps): React.ReactElement;
export default LanSquareStarThin;
