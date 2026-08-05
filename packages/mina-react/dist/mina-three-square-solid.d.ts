import React from 'react';

export interface MinaThreeSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaThreeSquareSolid(props: MinaThreeSquareSolidProps): React.ReactElement;
export default MinaThreeSquareSolid;
