import React from 'react';

export interface MinaSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSquareSolid(props: MinaSquareSolidProps): React.ReactElement;
export default MinaSquareSolid;
