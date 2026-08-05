import React from 'react';

export interface MinaCodeSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCodeSquareSolid(props: MinaCodeSquareSolidProps): React.ReactElement;
export default MinaCodeSquareSolid;
