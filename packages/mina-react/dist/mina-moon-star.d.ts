import React from 'react';

export interface MinaMoonStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMoonStar(props: MinaMoonStarProps): React.ReactElement;
export default MinaMoonStar;
