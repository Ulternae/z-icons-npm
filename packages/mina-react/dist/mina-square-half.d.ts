import React from 'react';

export interface MinaSquareHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSquareHalf(props: MinaSquareHalfProps): React.ReactElement;
export default MinaSquareHalf;
