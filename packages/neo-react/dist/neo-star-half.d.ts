import React from 'react';

export interface NeoStarHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoStarHalf(props: NeoStarHalfProps): React.ReactElement;
export default NeoStarHalf;
