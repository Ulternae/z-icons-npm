import React from 'react';

export interface MinaCheckSquareOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCheckSquareOne(props: MinaCheckSquareOneProps): React.ReactElement;
export default MinaCheckSquareOne;
