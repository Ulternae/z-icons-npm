import React from 'react';

export interface LanSquareLProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareL(props: LanSquareLProps): React.ReactElement;
export default LanSquareL;
