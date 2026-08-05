import React from 'react';

export interface MinaIndifferentSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaIndifferentSquareSolid(props: MinaIndifferentSquareSolidProps): React.ReactElement;
export default MinaIndifferentSquareSolid;
