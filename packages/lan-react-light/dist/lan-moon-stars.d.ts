import React from 'react';

export interface LanMoonStarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoonStars(props: LanMoonStarsProps): React.ReactElement;
export default LanMoonStars;
