import React from 'react';

export interface NeoAtSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoAtSolid(props: NeoAtSolidProps): React.ReactElement;
export default NeoAtSolid;
