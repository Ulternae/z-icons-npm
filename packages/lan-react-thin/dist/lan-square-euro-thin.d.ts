import React from 'react';

export interface LanSquareEuroThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareEuroThin(props: LanSquareEuroThinProps): React.ReactElement;
export default LanSquareEuroThin;
