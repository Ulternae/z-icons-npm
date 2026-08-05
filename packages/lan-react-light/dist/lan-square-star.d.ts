import React from 'react';

export interface LanSquareStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareStar(props: LanSquareStarProps): React.ReactElement;
export default LanSquareStar;
