import React from 'react';

export interface MinaBookMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookMinus(props: MinaBookMinusProps): React.ReactElement;
export default MinaBookMinus;
