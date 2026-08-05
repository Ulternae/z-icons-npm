import React from 'react';

export interface LanStarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStars(props: LanStarsProps): React.ReactElement;
export default LanStars;
