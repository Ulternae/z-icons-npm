import React from 'react';

export interface MinaSearchSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchSquareSolid(props: MinaSearchSquareSolidProps): React.ReactElement;
export default MinaSearchSquareSolid;
