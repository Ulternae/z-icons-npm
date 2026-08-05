import React from 'react';

export interface LanStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStar(props: LanStarProps): React.ReactElement;
export default LanStar;
