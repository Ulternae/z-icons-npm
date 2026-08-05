import React from 'react';

export interface MinaAtSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAtSolid(props: MinaAtSolidProps): React.ReactElement;
export default MinaAtSolid;
