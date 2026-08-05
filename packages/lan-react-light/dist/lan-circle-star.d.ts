import React from 'react';

export interface LanCircleStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleStar(props: LanCircleStarProps): React.ReactElement;
export default LanCircleStar;
