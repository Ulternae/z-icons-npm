import React from 'react';

export interface LanStarChristmasProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarChristmas(props: LanStarChristmasProps): React.ReactElement;
export default LanStarChristmas;
