import React from 'react';

export interface MinaCheckSquareOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCheckSquareOneSolid(props: MinaCheckSquareOneSolidProps): React.ReactElement;
export default MinaCheckSquareOneSolid;
