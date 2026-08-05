import React from 'react';

export interface LanRssSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRssSquareSolid(props: LanRssSquareSolidProps): React.ReactElement;
export default LanRssSquareSolid;
