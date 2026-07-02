import React from 'react';

export interface CoreMoonStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMoonStar(props: CoreMoonStarProps): React.ReactElement;
export default CoreMoonStar;
