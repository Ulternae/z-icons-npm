import React from 'react';

export interface NeoStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoStar(props: NeoStarProps): React.ReactElement;
export default NeoStar;
