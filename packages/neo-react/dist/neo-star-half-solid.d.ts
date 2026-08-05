import React from 'react';

export interface NeoStarHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoStarHalfSolid(props: NeoStarHalfSolidProps): React.ReactElement;
export default NeoStarHalfSolid;
