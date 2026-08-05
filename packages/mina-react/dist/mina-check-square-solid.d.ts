import React from 'react';

export interface MinaCheckSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCheckSquareSolid(props: MinaCheckSquareSolidProps): React.ReactElement;
export default MinaCheckSquareSolid;
