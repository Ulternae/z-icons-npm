import React from 'react';

export interface MinaSadSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSadSquareSolid(props: MinaSadSquareSolidProps): React.ReactElement;
export default MinaSadSquareSolid;
