import React from 'react';

export interface MinaNineSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaNineSquareSolid(props: MinaNineSquareSolidProps): React.ReactElement;
export default MinaNineSquareSolid;
