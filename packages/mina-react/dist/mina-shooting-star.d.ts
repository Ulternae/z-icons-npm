import React from 'react';

export interface MinaShootingStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShootingStar(props: MinaShootingStarProps): React.ReactElement;
export default MinaShootingStar;
