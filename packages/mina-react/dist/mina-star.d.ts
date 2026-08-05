import React from 'react';

export interface MinaStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaStar(props: MinaStarProps): React.ReactElement;
export default MinaStar;
