import React from 'react';

export interface MinaXSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaXSquareSolid(props: MinaXSquareSolidProps): React.ReactElement;
export default MinaXSquareSolid;
