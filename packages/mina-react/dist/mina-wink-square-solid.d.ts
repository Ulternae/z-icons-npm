import React from 'react';

export interface MinaWinkSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWinkSquareSolid(props: MinaWinkSquareSolidProps): React.ReactElement;
export default MinaWinkSquareSolid;
