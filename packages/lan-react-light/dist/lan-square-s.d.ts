import React from 'react';

export interface LanSquareSProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareS(props: LanSquareSProps): React.ReactElement;
export default LanSquareS;
