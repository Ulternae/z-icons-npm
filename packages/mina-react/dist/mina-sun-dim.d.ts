import React from 'react';

export interface MinaSunDimProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSunDim(props: MinaSunDimProps): React.ReactElement;
export default MinaSunDim;
