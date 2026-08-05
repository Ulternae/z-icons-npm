import React from 'react';

export interface LanRssSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRssSquare(props: LanRssSquareProps): React.ReactElement;
export default LanRssSquare;
