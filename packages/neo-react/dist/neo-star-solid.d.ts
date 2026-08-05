import React from 'react';

export interface NeoStarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoStarSolid(props: NeoStarSolidProps): React.ReactElement;
export default NeoStarSolid;
