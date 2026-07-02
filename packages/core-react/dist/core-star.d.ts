import React from 'react';

export interface CoreStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreStar(props: CoreStarProps): React.ReactElement;
export default CoreStar;
