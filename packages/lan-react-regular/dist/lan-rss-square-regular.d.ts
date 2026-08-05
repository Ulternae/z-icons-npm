import React from 'react';

export interface LanRssSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRssSquareRegular(props: LanRssSquareRegularProps): React.ReactElement;
export default LanRssSquareRegular;
